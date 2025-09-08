import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Itinerary/', // GitHub Pages subdirectory
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable source maps for production
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          services: ['./src/services/weatherService.js', './src/services/mapService.js']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true, // Allow access from network
    open: true
  },
  preview: {
    port: 4173,
    host: true
  }
})
