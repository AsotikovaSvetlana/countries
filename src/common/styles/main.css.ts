import { createGlobalStyle } from "styled-components";

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
    font-family: var(--family);
    font-weight: var(--fw-light);
    background-color: ${({ theme }) => theme.bg_color};
    color: ${({ theme }) => theme.text_color};
  }

  :root {
    --family: 'Nunito Sans', sans-serif;
    --fs-sm: 14px;
    --fs-md: 16px;
    --fw-light: 300;
    --fw-normal: 600;
    --fw-bold: 800;
    --br-radius: 0.5rem;

    height: 100%;
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
