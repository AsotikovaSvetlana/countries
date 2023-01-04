import styled from "styled-components";
import * as variables from "../../../../../common/styles/variables";

export const StyledThemeSwitcher = styled.div`
  color: ${({ theme }) => theme.text_color};
  font-size: ${variables.fs_sm};
  text-transform: capitalize;
  cursor: pointer;

  svg {
    vertical-align: text-top;
  }
`;
