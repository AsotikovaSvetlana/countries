import React from "react";
import { StyledCardList } from "./styles/StyledCardList";

interface CardListProps {
  children: React.ReactNode;
}

export const CardList: React.FC<CardListProps> = ({ children }) => (
  <StyledCardList>{children}</StyledCardList>
);
