import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";``

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4001,
    cors: true,
  },
  preview:{
    host: '0.0.0.0',
    port: 4001, // Ensure the preview server runs on the same port
    cors: true, // Enable CORS for the preview server
  },
  plugins: [
    react(),
    federation({
      name: 'sidebar',
      filename: 'remoteEntry.js',
      exposes: {
        './Sidebar': './src/sidebar/sidebar.tsx',
      },
      shared: ['react', 'react-dom'],
    })
  ],
  build:{
    // target:'exnext',
    minify: false, // Disable minification for easier debugging
    cssCodeSplit: false, // Enable CSS code splitting
  }
})
