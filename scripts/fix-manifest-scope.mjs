// public/manifest.webmanifest ships with scope/start_url "/" (correct for
// Vercel and local dev). On GitHub Pages the app is served from a subpath
// (no custom domain), so patch the built copy to match vite.config.js's base.
import { readFileSync, writeFileSync } from 'node:fs'

const base = process.env.VERCEL ? '/' : '/ttk/'
const path = 'dist/manifest.webmanifest'

const manifest = JSON.parse(readFileSync(path, 'utf8'))
manifest.scope = base
manifest.start_url = base
writeFileSync(path, JSON.stringify(manifest, null, 2) + '\n')
