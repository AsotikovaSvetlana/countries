import React from "react";
import * as S from "./styles/Header.styles";
import { Container } from "../Container";
import { Flex } from "../Flex";
import { ThemeSwitcher } from "../../features/theme/ThemeSwitcher";
import useControls from "../../features/controls/hooks/useCleanControls";

export const Header = () => {
  const cleanControls = useControls();

  return (
    <S.Header>
      <Container>
        <Flex justify="space-between" align="center" padding="2rem 0">
          <S.Title to="/" onClick={cleanControls}>
            Where is the world?
          </S.Title>
          <ThemeSwitcher />
        </Flex>
      </Container>
    </S.Header>
  );
};
