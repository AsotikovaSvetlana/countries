import styled from "styled-components";

export const Card = styled.article`
  border-radius: var(--br-radius);
  background-color: ${({ theme }) => theme.accent_color};
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  cursor: pointer;
`;
