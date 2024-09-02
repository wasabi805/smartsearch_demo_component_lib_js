import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 3000
  },
  plugins: [react()],

  
  build: {
    copyPublicDir: false,
    lib: {
      // eslint-disable-next-line no-undef
      entry: resolve(__dirname, 'lib/main.js'),
      formats: ['es']
      },
      rollupOptions: {
        external: ['react', 'react/jsx-runtime'],
        output: {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].js',
        }



      }
  }
})
