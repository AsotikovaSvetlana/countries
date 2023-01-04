import React from "react";
import { StyledContainer } from "./styles/StyledContainer";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
