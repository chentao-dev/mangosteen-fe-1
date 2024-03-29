import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { svgstore } from "./src/vite_plugins/svgstore";
import styleImport, { VantResolve } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/mangosteen-fe-1/dist/", //部署
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true,
    }),
    svgstore(),
    styleImport({ resolves: [VantResolve()] }),
  ],
});
