import { AppTheme } from "./stores";

const themes = ["dark", "light"];
export function setTheme(theme) {
  if (themes.includes(theme)) {
    const one_year = 60 * 60 * 24 * 365;
    window.localStorage.setItem("theme", theme);
    document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Lax`;
    document.documentElement.setAttribute("data-theme", theme);
    AppTheme.set(theme);
  }
}
