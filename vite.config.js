import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: "vitest-plugin-beforeall",
      config: () => ({
        test: { setupFiles: ["./vitest/beforeall.js"] },
      }),
    },
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".mjs",
      ".ts",
      ".tsx",
      ".vue",
      ".css",
      ".scss",
    ],
  },
  test: {
    globals: true,
    globalSetup: ["./vitest/setup.js"],
    environment: "jsdom",
    deps: {
      inline: ["vuetify"],
    },
  },
});
