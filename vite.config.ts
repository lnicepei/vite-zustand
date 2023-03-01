import { resolve } from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: resolve("src/app/"),
      pages: resolve("src/pages/"),
      shared: resolve("src/shared/"),
      entities: resolve("src/entities/"),
      features: resolve("src/features/"),
      processes: resolve("src/processes/"),
    },
  },
});