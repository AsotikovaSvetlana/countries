import React from "react";
import * as S from "./styles/Main.styles";
import { Container } from "../../../Container";

interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => (
  <S.Main>
    <Container>{children}</Container>
  </S.Main>
);
