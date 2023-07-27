import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import SVGLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), SVGLoader()],
  publicDir: 'public',
  define: {
    'process.env': {}
  },
  base: '/kirsti-brandux/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
