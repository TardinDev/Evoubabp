import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion', 'lottie-react', '@lottiefiles/react-lottie-player'],
          icons: ['react-icons'],
          styling: ['styled-components', '@react-spring/web']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
