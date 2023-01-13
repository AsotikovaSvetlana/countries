import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setTheme } from "../theme-slice";

type toggleThemeType = React.MouseEventHandler<HTMLDivElement>;

export default function useTheme(): [string, toggleThemeType] {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const toggleTheme: toggleThemeType = () => {
    const newTheme: string = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
    localStorage.setItem("theme", newTheme);
  };

  return [theme, toggleTheme];
}
