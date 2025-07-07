import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/spanish-conjugator/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
