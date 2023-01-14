import React from "react";
import * as S from "./styles/Flex.styles";

interface FlexProps {
  children: React.ReactNode;
  margin?: string;
  padding?: string;
  direction?: string;
  justify?: string;
  align?: string;
}

export const Flex: React.FC<FlexProps> = ({
  children,
  margin,
  padding,
  direction,
  justify,
  align,
}) => (
  <S.Flex
    margin={margin}
    padding={padding}
    direction={direction}
    justify={justify}
    align={align}
  >
    {children}
  </S.Flex>
);
