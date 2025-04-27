import { defineConfig } from 'vite'

export default defineConfig({
    base: '/js-vite-blackjack/',
    plugins: [],
    build: {
        rollupOptions: {
          output: {
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            assetFileNames: `assets/[name].[ext]`
          }
        }}
});