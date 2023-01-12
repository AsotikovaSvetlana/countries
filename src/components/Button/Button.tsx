import React from "react";
import * as S from "./styles/Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <S.Button onClick={onClick}>{children}</S.Button>
);
