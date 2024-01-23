import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import path from "path";

const config = {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    alias: {
      "@": path.resolve("./src"),
    },
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
