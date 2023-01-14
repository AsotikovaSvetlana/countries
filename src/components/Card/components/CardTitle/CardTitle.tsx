import React from "react";
import * as S from "./styles/CardTitle.styles";

interface CardTitleProps {
  children: React.ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => (
  <S.CardTitle>{children}</S.CardTitle>
);
