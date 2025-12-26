import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ErrorCode } from 'selenium-webdriver/lib/error'

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

// testando comiti pelo vs-ErrorCode

