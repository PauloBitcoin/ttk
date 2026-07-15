import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Custom domain (bbft.live) via GitHub Pages CNAME - a root deploy.
  base: '/',
  plugins: [react(), tailwindcss()],
})
