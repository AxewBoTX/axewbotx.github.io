import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import path from "path";

const config = {
  kit: {
    adapter: adapter(),
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
