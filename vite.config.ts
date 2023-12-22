import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/transparent-background-capture/",
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "[folder]__[local]-[hash:8]",
    },
  },
});
