// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import svgLoader from "vite-svg-loader";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

const pathSrc = path.resolve(__dirname, "./src");

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    AutoImport({
      dts: true,
      imports: ["vue", "vue-router"],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dts: true,
      dirs: ["src/components/shared"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${pathSrc}/assets/styles/_variables.scss"; @import "${pathSrc}/assets/styles/_fonts.scss"; @import "${pathSrc}/assets/styles/_breakpoints.scss"; @import "${pathSrc}/assets/styles/_typography.scss";`,
      },
    },
  },
  define: {
    "process.env": {},
  },
});
