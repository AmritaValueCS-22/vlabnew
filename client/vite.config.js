import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": "/src",
      components: "/src/Components",
      utility: "/src/utilits",
      img: "/src/assets",
      layouts: "src/layouts",
      assets: "src/assets",
      examples: "src/examples",
    },
  },
});
