import React from "react";
import { StyledFlex } from "./styles/StyledFlex";

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
}) => {
  return (
    <StyledFlex
      margin={margin}
      padding={padding}
      direction={direction}
      justify={justify}
      align={align}
    >
      {children}
    </StyledFlex>
  );
};
