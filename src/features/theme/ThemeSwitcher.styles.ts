import styled from "styled-components";

export const ThemeSwitcher = styled.div`
  color: ${({ theme }) => theme.text_color};
  font-size: var(--fs-sm);
  text-transform: capitalize;
  cursor: pointer;

  svg {
    vertical-align: text-top;
  }
`;

export const ThemeTitle = styled.span`
  margin-left: 0.75rem;
`;
