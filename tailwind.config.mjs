/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#f78265",
          secondary: "#1ec99e",
          accent: "#2573a3",
          neutral: "#202020",
          "base-100": "#282828",
          info: "#8bc6f4",
          success: "#45d3c0",
          warning: "#f8cf68",
          error: "#f53848",
        },
      },
    ],
  },
};
