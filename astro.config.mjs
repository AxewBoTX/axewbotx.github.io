import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  integrations: [
    tailwind(),
    icon(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dark-plus" },
    }),
  ],
});
