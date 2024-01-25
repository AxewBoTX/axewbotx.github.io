/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#f78265",
          secondary: "#1ec99e",
          accent: "#2573a3",
          neutral: "#20303c",
          "base-100": "#282828",
          info: "#8bc6f4",
          success: "#45d3c0",
          warning: "#f8cf68",
          error: "#f53848",
        },
        light: {
          primary: "#50e0c8",
          secondary: "#f49cd5",
          accent: "#cd8fea",
          neutral: "#1e1727",
          "base-100": "#f6f2f8",
          info: "#92a7e7",
          success: "#73deaf",
          warning: "#e2aa03",
          error: "#f36d93",
        },
      },
    ],
  },
};
