import React from "react";
import { StyledList } from "./styles/StyledList";

interface ListProps {
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ children }) => (
  <StyledList>{children}</StyledList>
);
