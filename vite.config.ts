import { defineConfig } from "vite"
import react from "@vitejs/plugin-react";
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
    base: "/jsa-react-ts-demo/",
    plugins: [react(), legacy()],
})
