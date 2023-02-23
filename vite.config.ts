import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: resolve("src/app/"),
      pages: resolve("src/pages/"),
      entities: resolve("src/entities/"),
      features: resolve("src/features/"),
      processes: resolve("src/processes/"),
    },
  },
});
