import franken from "franken-ui/shadcn-ui/preset-quick";
const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    franken({
      customPalette: {
        ".uk-theme-axew": {
          "--background": "182.8 0% 96.9%",
          "--foreground": "182.8 0% 8.5%",
          "--card": "182.8 0% 96.9%",
          "--card-foreground": "182.8 0% 13.5%",
          "--popover": "182.8 0% 98.5%",
          "--popover-foreground": "182.8 95% 6.9%",
          "--primary": "182.8 100% 29.8%",
          "--primary-foreground": "0, 0%, 0%",
          "--secondary": "182.8 10% 83.8%",
          "--secondary-foreground": "0 0% 0%",
          "--muted": "220.8 10% 91.9%",
          "--muted-foreground": "182.8 0% 38.5%",
          "--accent": "220.8 10% 86.9%",
          "--accent-foreground": "182.8 0% 13.5%",
          "--destructive": "0 50% 43.8%",
          "--destructive-foreground": "182.8 0% 96.9%",
          "--border": "182.8 20% 72.1%",
          "--input": "182.8 20% 40.1%",
          "--ring": "182.8 88.7% 45.3%",
          "--radius": "0.6rem",
          "--sidebar-background": "183, 0%, 92%",
          "--sidebar-foreground": "183, 0%, 8%",
          "--sidebar-primary": "183, 100%, 27%",
          "--sidebar-primary-foreground": "0 0% 0%",
          "--sidebar-accent": "221, 10%, 83%",
          "--sidebar-accent-foreground": "0 0% 0%",
          "--sidebar-border": "183, 20%, 68%",
          "--sidebar-ring": "173, 98%, 45%",
        },
        ".dark.uk-theme-axew": {
          "--background": "182.8 10% 8.5%",
          "--foreground": "182.8 0% 96.9%",
          "--card": "182.8 0% 6.9%",
          "--card-foreground": "182.8 0% 96.9%",
          "--popover": "182.8 10% 5%",
          "--popover-foreground": "182.8 0% 96.9%",
          "--primary": "182.8 100% 29.8%",
          "--primary-foreground": "0, 0%, 0%",
          "--secondary": "182.8 10% 16.9%",
          "--secondary-foreground": "0 0% 100%",
          "--muted": "220.8 10% 21.9%",
          "--muted-foreground": "182.8 0% 63.5%",
          "--accent": "220.8 10% 21.9%",
          "--accent-foreground": "182.8 0% 93.5%",
          "--destructive": "0 50% 43.8%",
          "--destructive-foreground": "182.8 0% 96.9%",
          "--border": "182.8 20% 40.1%",
          "--input": "182.8 20% 40.1%",
          "--ring": "182.8 88.7% 45.3%",
          "--radius": "0.6rem",
          "--sidebar-background": "183, 10%, 11%",
          "--sidebar-foreground": "183, 0%, 100%",
          "--sidebar-primary": "183, 100%, 24%",
          "--sidebar-primary-foreground": "0, 0%, 0%",
          "--sidebar-accent": "221, 10%, 19%",
          "--sidebar-accent-foreground": "0 0% 100%",
          "--sidebar-border": "183, 20%, 38%",
          "--sidebar-ring": "173, 98%, 45%",
        },
      },
    }),
  ],
  content: ["./index.html"],
  safelist: [
    {
      pattern: /^uk-/,
    },
    "ProseMirror",
    "ProseMirror-focused",
    "tiptap",
    "mr-2",
    "mt-2",
    "opacity-50",
  ],
  theme: {
    extend: {},
  },
  plugins: [addIconSelectors(["mdi"])],
};
