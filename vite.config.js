import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Deployed on GitHub Pages at paulobitcoin.github.io/ttk/ (no custom domain).
  base: '/ttk/',
  plugins: [react(), tailwindcss()],
})
