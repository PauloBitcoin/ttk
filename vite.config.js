import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Two deploy targets exist for this repo: Vercel (serves each build at the
  // root of its own domain — Vercel sets process.env.VERCEL during its
  // build) and GitHub Pages (serves at paulobitcoin.github.io/ttk/, no
  // custom domain). Pick the base accordingly.
  base: process.env.VERCEL ? '/' : '/ttk/',
  plugins: [react(), tailwindcss()],
})
