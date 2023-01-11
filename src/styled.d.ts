import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text_color: string;
    bg_color: string;
    accent_color: string;
    shadow: string;
    loader_bg: string;
  }
}
