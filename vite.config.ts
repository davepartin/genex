import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves a project site from /<repo>/, so the build sets
// VITE_BASE=/genex/. Local dev and Vercel keep the default root base.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
