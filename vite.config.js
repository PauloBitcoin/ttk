import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Custom domain (bbft.live) via GitHub Pages CNAME, and Vercel previews
  // serve at the root of their own domain too — both are root deploys now.
  base: '/',
  plugins: [react(), tailwindcss()],
})
