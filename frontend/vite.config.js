import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // Usamos path.resolve para garantir que o caminho seja absoluto e correto
        additionalData: `@import "${path.resolve(__dirname, 'src/theme.less')}";`,
      },
    },
  },
  preview: {
    allowedHosts: [
      'frontend-production-2022.up.railway.app',
      'legalizada.com',
      'www.legalizada.com',
    ],
  },
});

