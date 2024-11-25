import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import eslint from '@rollup/plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    eslint({
      include: ['./src/**/*.js', './src/**/*.vue'],
    }),
    cssInjectedByJsPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    minify: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/components/index.js'),
      name: 'VueGridLayout',
      // the proper extensions will be added
      fileName: 'vue-grid-layout-v3',
      formats: ['iife', 'es', 'umd', 'cjs'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
}));
