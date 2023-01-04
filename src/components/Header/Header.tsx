import React from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import { StyledHeader } from "./styles/StyledHeader";
import { Container } from "../Container";
import { Flex } from "../Flex";
import { Title } from "./components/Title";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

interface HeaderProps {
  theme: string;
  toggleTheme: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => (
  <StyledHeader>
    <Container>
      <Flex justify="space-between" align="center" padding="2rem 0">
        <Title>Where is the world?</Title>
        <ThemeSwitcher toggleTheme={toggleTheme}>
          {theme === "light" ? <IoSunny size="16px" /> : <IoMoon size="14px" />}{" "}
          <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
        </ThemeSwitcher>
      </Flex>
    </Container>
  </StyledHeader>
);
