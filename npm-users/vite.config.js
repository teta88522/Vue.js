import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    //개발용 Server, 운영 시 무력화
    port: 8099,
    proxy: {
      //해당 (정규)표현식으로 시작하는 통신일 경우
      "^/fallback": {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true, //프로토콜:IP:port=>origin
        rewrite: (path) => path.replace(/^\/fallback/, ""), // /\ <정규 표현식
      },
    },
  },
});
