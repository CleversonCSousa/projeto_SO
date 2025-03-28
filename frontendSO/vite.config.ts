import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 7172,
    allowedHosts: ["all", "andromeda.lasdpc.icmc.usp.br"],
    proxy: {
      "/data": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
