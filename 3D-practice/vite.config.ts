import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
console.log(vue())
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0'
  }
})
