import React from "react";
import * as S from "./styles/CardList.styles";

interface CardListProps {
  children: React.ReactNode;
}

export const CardList: React.FC<CardListProps> = ({ children }) => (
  <S.CardList>{children}</S.CardList>
);
