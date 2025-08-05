// vite.config.js
import { defineConfig } from "vite";
import path from "path";

const base = process.env.NODE_ENV === "production" ? "/signup-page-demo/" : "/";

export default defineConfig({
  base,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
