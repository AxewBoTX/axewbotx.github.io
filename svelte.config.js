import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import path from "path";

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      "@": path.resolve("./src"),
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
