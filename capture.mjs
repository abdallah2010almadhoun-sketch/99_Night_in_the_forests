import { createRequire } from 'node:module'
import { readFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const timed = async (label, action) => {
  const start = Date.now()
  try { return await action() }
  finally { console.log(`[timing] ${label}: ${Date.now() - start} ms`) }
}

const url = process.env.CAPTURE_URL
const output = process.env.CAPTURE_DIR
if (!url || !output) {
  console.error('Set CAPTURE_URL and CAPTURE_DIR.')
  process.exit(1)
}

let target
try {
  target = new URL(url)
  if (!['http:', 'https:'].includes(target.protocol)) throw new Error('Unsupported URL protocol.')
} catch (error) {
  console.error(`Invalid CAPTURE_URL: ${error.message}`)
  process.exit(1)
}

let chromium
let config
try {
  const runtime = join(process.env.HOME, '.local/share/omgithub-playwright')
  const require = createRequire(join(runtime, 'package.json'))
  ;({ chromium } = require('playwright'))
  config = JSON.parse(readFileSync(join(runtime, process.platform === 'darwin' ? 'metal.json' : 'linux.json'), 'utf8'))
  if (process.platform === 'linux') process.env.DISPLAY ||= ':' + readFileSync(join(runtime, 'display'), 'utf8').trim()
} catch (error) {
  console.error(`Temporary browser infrastructure failure: ${error.message}`)
  process.exit(75)
}

try {
  await timed('capture directory creation', () => mkdirSync(output, { recursive: true }))
} catch (error) {
  console.error(`Could not create capture directory: ${error.message}`)
  process.exit(1)
}

// The game is landscape-only, so use a landscape handset viewport for mobile.
const views = [
  { name: 'desktop', options: { viewport: { width: 1280, height: 800 } } },
  { name: 'mobile', options: { viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 } }
]

async function ensureLandscape(page) {
  const portrait = await page.evaluate(() => window.innerHeight > window.innerWidth)
  if (!portrait) return
  const size = page.viewportSize()
  const width = Math.max(size?.width ?? 0, size?.height ?? 0)
  const height = Math.min(size?.width ?? 0, size?.height ?? 0)
  console.log(`Portrait viewport detected; rotating capture viewport to ${width}x${height}.`)
  await page.setViewportSize({ width, height })
  await page.waitForFunction(() => window.innerWidth >= window.innerHeight)
}

let browser
let exitCode = 0
try {
  try {
    browser = await timed('browser launch', () => chromium.launch({ ...config.browser.launchOptions, timeout: 30000 }))
  } catch (error) {
    console.error(`Temporary browser infrastructure failure: ${error.message}`)
    exitCode = 75
  }

  if (browser) {
    for (const view of views) {
      const { name } = view
      let page
      try {
        page = await timed(`${name} page creation`, () => browser.newPage(view.options))
      } catch (error) {
        console.error(`Temporary browser infrastructure failure (${name} page): ${error.message}`)
        exitCode = 75
        break
      }
      page.setDefaultTimeout(30000)
      const failures = new Set()
      page.on('pageerror', error => failures.add(`JavaScript error: ${error.message}`))
      page.on('response', response => {
        try {
          if (response.status() >= 400 && new URL(response.url()).origin === target.origin) failures.add(`HTTP ${response.status()}: ${response.url()}`)
        } catch {}
      })

      let response
      try {
        response = await timed(`${name} navigation`, () => page.goto(url, { waitUntil: 'load', timeout: 45000 }))
      } catch (error) {
        console.error(`Temporary navigation failure (${name}): ${error.message}`)
        exitCode = 75
        await timed(`${name} page close`, () => page.close().catch(() => {}))
        break
      }
      if (!response?.ok()) {
        const status = response?.status()
        console.error(`Preview returned HTTP ${status ?? 'no response'} (${name}).`)
        exitCode = !response || [408, 429, 500, 502, 503, 504].includes(status) ? 75 : 1
        await timed(`${name} page close`, () => page.close().catch(() => {}))
        if (exitCode === 75) break
        continue
      }

      try {
        await timed(`${name} rendered-content wait`, async () => {
          await page.locator('#game').waitFor({ state: 'visible' })
          await page.waitForFunction(() => {
            const canvas = document.querySelector('#game')
            const hud = document.querySelector('#nightText')?.textContent?.trim() ?? ''
            const rect = canvas?.getBoundingClientRect()
            return !!canvas && canvas.width > 0 && canvas.height > 0 && !!rect && rect.width > 0 && rect.height > 0 && /^\d+\s*\/\s*99$/.test(hud)
          })
          await page.waitForFunction(() => document.fonts.status === 'loaded')
        })
      } catch (error) {
        failures.add(`Rendered-content check failed: ${error.message}`)
      }

      try {
        await timed(`${name} landscape guard`, () => ensureLandscape(page))
        const startButton = page.locator('#startBtn')
        if (await startButton.isVisible()) {
          await timed(`${name} game start`, () => startButton.click())
          await page.waitForFunction(() => document.querySelector('#startOverlay')?.classList.contains('hidden'))
        }
      } catch (error) {
        failures.add(`Game setup/rendering failed: ${error.message}`)
      }

      try {
        await timed(`${name} settle wait`, () => page.waitForTimeout(600))
        await timed(`${name} screenshot`, () => page.screenshot({ path: join(output, `final-${name}.png`), timeout: 30000 }))
      } catch (error) {
        console.error(`Temporary browser capture failure (${name}): ${error.message}`)
        exitCode = 75
      }

      if (failures.length) {
        console.error(`${name} rendering defects: ${[...failures].join('; ')}`)
        if (exitCode !== 75) exitCode = 1
      }
      await timed(`${name} page close`, () => page.close().catch(() => {}))
    }
  }
} finally {
  if (browser) {
    try { await timed('browser close', () => browser.close()) }
    catch (error) {
      console.error(`Temporary browser cleanup failure: ${error.message}`)
      if (exitCode !== 1) exitCode = 75
    }
  }
}
process.exitCode = exitCode
