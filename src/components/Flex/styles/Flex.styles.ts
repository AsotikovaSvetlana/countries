import styled from "styled-components";

interface FlexProps {
  margin?: string;
  padding?: string;
  direction?: string;
  justify?: string;
  align?: string;
}

export const Flex = styled.div<FlexProps>`
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "stretch"};
  align-items: ${({ align }) => align || "stretch"};
`;
