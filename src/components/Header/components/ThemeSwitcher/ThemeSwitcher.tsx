import React from "react";
import { StyledThemeSwitcher } from "./styles/StyledThemeSwitcher";

interface ThemeSwitcherProps {
  children: React.ReactNode;
  toggleTheme: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  children,
  toggleTheme,
}) => (
  <StyledThemeSwitcher onClick={toggleTheme}>{children}</StyledThemeSwitcher>
);
