#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"
PORT="${PORT:-3000}"
OPENCODE_WEB_DIR="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}"
export PORT OPENCODE_WEB_DIR

if [[ ! -x node_modules/.bin/vite || ! -f node_modules/.package-lock.json || package.json -nt node_modules/.package-lock.json || ( -f package-lock.json && package-lock.json -nt node_modules/.package-lock.json ) ]]; then
  if [[ -f package-lock.json ]]; then
    /usr/bin/time -p npm ci --no-audit --no-fund
  else
    /usr/bin/time -p npm install --no-audit --no-fund
  fi
fi

if [[ ! -f dist/index.html ]] || find index.html src package.json package-lock.json vite.config.js -type f -newer dist/index.html -print -quit 2>/dev/null | grep -q .; then
  /usr/bin/time -p npm run build
fi

/usr/bin/time -p mkdir -p "$OPENCODE_WEB_DIR"
/usr/bin/time -p node --input-type=module -e 'import { realpathSync, writeFileSync } from "node:fs"; import { resolve } from "node:path"; const project = realpathSync(process.cwd()); const directory = realpathSync(resolve(project, "dist")); writeFileSync(resolve(process.env.OPENCODE_WEB_DIR, "deployment-output.json"), JSON.stringify({ project, directory }));'

preview_url="${APP_URL:-}"
if [[ -z "$preview_url" && -f "$OPENCODE_WEB_DIR/app-url" ]]; then
  preview_url="$(/usr/bin/time -p cat "$OPENCODE_WEB_DIR/app-url")"
fi
if [[ -n "$preview_url" ]]; then
  PREVIEW_ALLOWED_HOST="$(/usr/bin/time -p node -e 'process.stdout.write(new URL(process.argv[1]).hostname)' "$preview_url")"
  export PREVIEW_ALLOWED_HOST
fi

# Keep the preview server in the foreground for the controller-managed tmux session.
/usr/bin/time -p npm run preview -- --host 0.0.0.0 --port "$PORT" --strictPort
