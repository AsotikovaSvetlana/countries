import { createGlobalStyle } from "styled-components";
import * as variables from "./variables";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: ${variables.family};
    font-weight: ${variables.fw_light};
    background-color: ${({ theme }) => theme.bg_color};
    color: ${({ theme }) => theme.text_color};
  }

  #root {
    height: 100%
    width: 100%;
  }

  a {
    color: currentColor;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export { GlobalStyles };
