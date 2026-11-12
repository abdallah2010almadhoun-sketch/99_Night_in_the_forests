import { createRequire } from 'node:module'
import { readFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const runtime = join(process.env.HOME, '.local/share/omgithub-playwright')
const require = createRequire(join(runtime, 'package.json'))
const { chromium } = require('playwright')
const config = JSON.parse(readFileSync(join(runtime, process.platform === 'darwin' ? 'metal.json' : 'linux.json'), 'utf8'))
if (process.platform === 'linux') process.env.DISPLAY ||= ':' + readFileSync(join(runtime, 'display'), 'utf8').trim()

const url = process.env.CAPTURE_URL
const output = process.env.CAPTURE_DIR
if (!url || !output) throw new Error('Set CAPTURE_URL and CAPTURE_DIR.')
let target
try {
  target = new URL(url)
  if (!['http:', 'https:'].includes(target.protocol)) throw new Error('Unsupported URL protocol.')
} catch (error) {
  console.error(`Invalid CAPTURE_URL: ${error.message}`)
  process.exit(1)
}
mkdirSync(output, { recursive: true })
const timed = async (label, action) => {
  const start = Date.now()
  try { return await action() }
  finally { console.log(`[timing] ${label}: ${Date.now() - start} ms`) }
}
let browser
let exitCode = 0
try {
  browser = await timed('browser launch', () => chromium.launch({ ...config.browser.launchOptions, timeout: 30000 })).catch(error => { error.exitCode = 75; throw error })
  for (const [name, width, height] of [['desktop', 1280, 800], ['mobile', 390, 844]]) {
    const page = await timed(`${name} page creation`, () => browser.newPage({ viewport: { width, height } })).catch(error => { error.exitCode = 75; throw error })
    page.setDefaultTimeout(30000)
    const failures = []
    page.on('pageerror', error => failures.push(`JavaScript error: ${error.message}`))
    page.on('response', response => {
      try {
        if (response.status() >= 400 && new URL(response.url()).origin === target.origin) failures.push(`HTTP ${response.status()}: ${response.url()}`)
      } catch {}
    })
    let response
    try {
      response = await timed(`${name} navigation`, () => page.goto(url, { waitUntil: 'load', timeout: 45000 }))
    } catch (error) {
      console.error(`Temporary navigation failure (${name}): ${error.message}`)
      exitCode = 75
      await page.close().catch(() => {})
      break
    }
    if (!response?.ok()) {
      const status = response?.status()
      console.error(`Preview returned HTTP ${status ?? 'no response'} (${name}).`)
      exitCode = !response || [408, 429, 500, 502, 503, 504].includes(status) ? 75 : 1
      await page.close().catch(() => {})
      break
    }

    await timed(`${name} rendered-content wait`, async () => {
      await page.locator('#game').waitFor({ state: 'visible' })
      await page.waitForFunction(() => {
        const canvas = document.querySelector('#game')
        const hud = document.querySelector('#nightText')
        const rect = canvas?.getBoundingClientRect()
        return !!canvas && canvas.width > 0 && canvas.height > 0 && !!rect && rect.width > 0 && rect.height > 0 && hud?.textContent?.trim() === '1'
      })
      await page.waitForFunction(() => document.fonts.status === 'loaded')
    })

    const startButton = page.locator('#startBtn')
    if (await startButton.isVisible()) {
      await timed(`${name} game start`, () => startButton.click())
      await page.waitForFunction(() => document.querySelector('#startOverlay')?.classList.contains('hidden'))
    }
    await page.waitForTimeout(500)
    await timed(`${name} screenshot`, () => page.screenshot({ path: join(output, `final-${name}.png`), timeout: 30000 }))
    await page.close()
    if (failures.length) {
      console.error(`${name} rendering defects: ${failures.join('; ')}`)
      exitCode = 1
      break
    }
  }
} catch (error) {
  console.error(error)
  exitCode ||= error.exitCode || 1
} finally {
  if (browser) {
    try { await timed('browser close', () => browser.close()) }
    catch (error) { console.error(`Browser cleanup failed: ${error.message}`); exitCode ||= 75 }
  }
}
process.exitCode = exitCode
