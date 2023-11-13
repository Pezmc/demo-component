import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // Don't minify the library
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'MyLib',
      formats: ['umd'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      // Don't rollup the Vue dependency into the build
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
