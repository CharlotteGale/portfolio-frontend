import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./setupTests.js",
        include: ["./**/*.test.{js,jsx,ts,tsx}"],
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "../../frontend/src")
        },
    },
});
