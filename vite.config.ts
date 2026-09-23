import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/cv/',
  build: {
    outDir: 'dist/cv',
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss()],
})
