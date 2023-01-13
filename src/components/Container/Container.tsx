import React from "react";
import * as S from "./styles/Container.styles";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <S.Container>{children}</S.Container>
);
