import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: [
      { find: "./runtimeConfig", replacement: "./runtimeConfig.browser" },
      { find: "@", replacement: "/src" },
    ],
  },
  // depending on your application, base can also be "/"
  base: "",
  plugins: [react(), viteTsconfigPaths()],
  build: {
    rollupOptions: {
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false,
        }),
        // json(),
      ],
    },
  },
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
});
