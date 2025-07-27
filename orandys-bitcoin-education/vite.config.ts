import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@/components": resolve(__dirname, "./components"),
      "@/utils": resolve(__dirname, "./utils"),
      "@/styles": resolve(__dirname, "./styles")
    }
  },
  define: {
    'process.env': process.env
  }
})