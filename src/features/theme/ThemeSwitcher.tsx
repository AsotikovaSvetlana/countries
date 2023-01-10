import React from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import useTheme from "./hooks/useTheme";
import * as S from "./ThemeSwitcher.styles";

export const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <S.ThemeSwitcher onClick={toggleTheme}>
      {theme === "light" ? <IoSunny size="16px" /> : <IoMoon size="14px" />}{" "}
      <S.ThemeTitle>{theme} Theme</S.ThemeTitle>
    </S.ThemeSwitcher>
  );
};
