import React from "react";
import { StyledCardListItem } from "./styles/StyledCardListItem";

interface CardListItemProps {
  title: string;
  description: string | number;
}

export const CardListItem: React.FC<CardListItemProps> = ({
  title,
  description,
}) => (
  <StyledCardListItem>
    <span style={{ fontWeight: "800" }}>{title}:</span> {description}
  </StyledCardListItem>
);
