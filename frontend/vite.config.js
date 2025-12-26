import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'frontend-production-2022.up.railway.app',
      'legalizada.com',
      'www.legalizada.com'
    ]
  }
})

