import { defineConfig } from 'vite'

const previewAllowedHost = process.env.PREVIEW_ALLOWED_HOST

export default defineConfig({
  preview: {
    allowedHosts: previewAllowedHost ? [previewAllowedHost] : []
  }
})
