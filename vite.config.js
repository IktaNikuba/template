import { defineConfig } from 'vite'
import path from 'path'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: './main.js'
    },
    assetsDir: 'public'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    eslint(),
    stylelint({
      files: ['**/*.scss']
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "node_modules/bootstrap/scss/bootstrap-reboot";
          @import "node_modules/bootstrap/scss/bootstrap-grid";
        `
      }
    }
  }
})
