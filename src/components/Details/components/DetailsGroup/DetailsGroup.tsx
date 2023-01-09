import React from "react";
import { StyledDetailsGroup } from "./styles/StyledDetailsGroup";

interface DetailsGroupProps {
  children: React.ReactNode;
}

export const DetailsGroup: React.FC<DetailsGroupProps> = ({ children }) => (
  <StyledDetailsGroup>{children}</StyledDetailsGroup>
);
