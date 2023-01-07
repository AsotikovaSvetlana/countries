import styled from "styled-components";

export const StyledThemeSwitcher = styled.div`
  color: ${({ theme }) => theme.text_color};
  font-size: var(--fs-sm);
  text-transform: capitalize;
  cursor: pointer;

  svg {
    vertical-align: text-top;
  }
`;
