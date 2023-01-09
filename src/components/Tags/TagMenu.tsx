import React from "react";
import { StyledTagMenu } from "./styles/StyledTagMenu";

interface TagMenuProps {
  children: React.ReactNode;
}

export const TagMenu: React.FC<TagMenuProps> = ({ children }) => (
  <StyledTagMenu>{children}</StyledTagMenu>
);
