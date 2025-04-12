import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// No need to use dotenv here for Render
export default defineConfig({
  resolve: {
    alias: {
      'react-refresh/babel': path.resolve('./node_modules/react-refresh/babel.js'),
    },
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    // Use environment variable with a fallback
  }
})