import { defineConfig } from "vite";
import path from "path"

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        },
    },build: {
        outDir: "dist",
        minify: "esbuild"
    },
    server: {
        port: 1337,
        open: true
    }
})