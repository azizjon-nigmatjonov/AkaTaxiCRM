import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  build: {
    outDir: "build",
  },
  server: {
    port: 5555,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "scss/_mixins.scss";
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      components: "/src/components",
      assets: "/src/assets",
      hooks: "/src/hooks",
      layouts: "/src/layouts",
      scss: "/src/scss",
      services: "/src/services",
      store: "/src/store",
      utils: "/src/utils",
      views: "/src/views"
    },
  },
})
