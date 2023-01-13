import { ThemeType } from "./../theme-slice";

export const getTheme = (): ThemeType => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && ["dark", "light"].includes(savedTheme)) {
    return savedTheme as ThemeType;
  }

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) return "dark";

  return "light";
};
