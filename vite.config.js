import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api3': {
        target: 'https://mesinotomatis.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api3/, '/api/wa'),
      },
      '/api2': {
        target: 'https://mesinotomatis.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api2/, '/api/bank'),
      },
    },
  },
})
