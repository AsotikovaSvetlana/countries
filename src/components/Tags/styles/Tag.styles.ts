import styled from "styled-components";

export const Tag = styled.span`
  padding: 0 1rem;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.accent_color};
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;
`;
