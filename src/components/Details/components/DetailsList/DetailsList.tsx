import React from "react";
import { StyledDetailsList } from "./styles/StyledDetailsList";

interface DetailsListProps {
  children: React.ReactNode;
}

export const DetailsList: React.FC<DetailsListProps> = ({ children }) => (
  <StyledDetailsList>{children}</StyledDetailsList>
);
