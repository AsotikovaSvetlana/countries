import styled from "styled-components";

export const StyledHeader = styled.header`
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.accent_color};
`;
