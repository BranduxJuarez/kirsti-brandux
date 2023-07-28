import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import SVGLoader from 'vite-svg-loader'
console.log(process.env.NODE_ENV,'process.env.NODE_ENV')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), SVGLoader()],
  publicDir: 'public',
  define: {
    'process.env': {}
  },
  base: '/kirsti-brandux/',
  // base: process.env.NODE_ENV === '/kirsti-brandux/' ? '/repo-name/' : './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
