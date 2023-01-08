import React from "react";
import { StyledCardTitle } from "./styles/StyledCardTitle";

interface CardTitleProps {
  children: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => (
  <StyledCardTitle>{children}</StyledCardTitle>
);
