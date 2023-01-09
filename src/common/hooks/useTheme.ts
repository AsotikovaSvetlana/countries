import React, { useState, useEffect } from "react";

type onChangeTheme = (e: React.MouseEvent<HTMLDivElement>) => void;

export default function useTheme() {
  const [theme, setTheme] = useState("light");
  const isLightMode = theme === "light";

  const toggleTheme: onChangeTheme = () => {
    const newTheme = isLightMode ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return { theme, isLightMode, toggleTheme };
}
