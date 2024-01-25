import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  integrations: [tailwind(), icon()],
});

