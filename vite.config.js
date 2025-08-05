// vite.config.js
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/signup-page-demo/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Adjust if your source directory is different
    },
  },
});
