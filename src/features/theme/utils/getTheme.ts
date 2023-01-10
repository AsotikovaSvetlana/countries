export const getTheme = (): string => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && ["dark", "light"].includes(savedTheme)) return savedTheme;

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) return "dark";

  return "light";
};
