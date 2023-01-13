import React from "react";
import * as S from "./styles/CardListItem.styles";

interface CardListItemProps {
  title: string;
  description: string | number;
}

export const CardListItem: React.FC<CardListItemProps> = ({
  title,
  description,
}) => (
  <S.CardListItem>
    <span style={{ fontWeight: "800" }}>{title}:</span> {description}
  </S.CardListItem>
);
