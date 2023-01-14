import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setTheme } from "../theme-slice";
import { ThemeType } from "../theme-slice";

type ToggleThemeType = React.MouseEventHandler<HTMLDivElement>;

export default function useTheme(): [ThemeType, ToggleThemeType] {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const toggleTheme: ToggleThemeType = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
    localStorage.setItem("theme", newTheme);
  };

  return [theme, toggleTheme];
}
