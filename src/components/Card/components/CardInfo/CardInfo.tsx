import React from "react";
import * as S from "./styles/CardInfo.styles";

interface CardInfoProps {
  children: React.ReactNode;
}

export const CardInfo: React.FC<CardInfoProps> = ({ children }) => (
  <S.CardInfo>{children}</S.CardInfo>
);
