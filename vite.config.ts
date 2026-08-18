import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages ではプロジェクトのサブパス配信になるため相対パスにする
  base: './',
})
