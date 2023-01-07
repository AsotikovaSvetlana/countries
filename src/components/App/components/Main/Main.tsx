import React from "react";
import { StyledMain } from "./styles/StyledMain";
import { Container } from "../../../Container";

interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <StyledMain>
      <Container>{children}</Container>
    </StyledMain>
  );
};
