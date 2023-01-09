import React from "react";
import { StyledDetailsTags } from "./styles/StyledDetailsTags";

interface DetailsTagsProps {
  children: React.ReactNode;
}

export const DetailsTags: React.FC<DetailsTagsProps> = ({ children }) => (
  <StyledDetailsTags>{children}</StyledDetailsTags>
);
