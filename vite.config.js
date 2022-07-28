import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  optimizeDeps: {
    entries: 'src/dev.ts',
  },
  plugins: [
    vue({
      jsx: true,
      template: {
        compilerOptions: {
          whitespace: 'condense',
        },
      }
    }),
  ],
  resolve: {
    alias: [
      { find: 'vue', replacement: 'vue/dist/vue.js' },
    ],
  },
  server: {
    port: 8080,
    host: 'localhost',
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: '8081',
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'test',
      formats: ['iife'],
      fileName: (format) => 'test.js',
    },
  },
})
