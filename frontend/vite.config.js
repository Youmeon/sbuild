import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import autoprefixer from 'autoprefixer'; // Используем ES-модульный импорт

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Алиас для папки src
    },
  },
  server: {
    port: 3000, // Порт для разработки
    open: true, // Автоматически открывать браузер
  },
  build: {
    outDir: 'dist', // Папка для сборки
    assetsDir: 'assets', // Папка для статических assets
    sourcemap: true, // Генерация sourcemap
    rollupOptions: {
      output: {
        entryFileNames: `bundle.[hash].js`, // Имя файла для entry points
        chunkFileNames: `chunk.[hash].js`, // Имя файла для чанков
        assetFileNames: `asset.[hash].[ext]`, // Имя файла для assets (изображения, шрифты и т.д.)
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // Использование camelCase для CSS модулей
    },
    preprocessorOptions: {
      scss: {
        additionalData: ``, // Глобальные SCSS переменные
      },
    },
    postcss: {
      plugins: [autoprefixer()], // Используем autoprefixer
    },
  },
});
