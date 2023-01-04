import React from "react";
import { StyledTitle } from "./styles/StyledTitle";

interface TitleProps {
  children: string;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <StyledTitle to="/">{children}</StyledTitle>;
};
