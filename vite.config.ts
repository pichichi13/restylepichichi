import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'
import sitemap from "vite-plugin-sitemap";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.donatellapiccininno.it/',
      exclude: ['/admin', '/private'], // Escludi pagine se necessario
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@utils': resolve(__dirname, './src/utils'),
      '@components': resolve(__dirname, './src/components'),
      '@css': resolve(__dirname, './src/styles')
    }
  },
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pichichihouse: resolve(__dirname, 'pichichihouse.html'),
      },
    },
  },
})
