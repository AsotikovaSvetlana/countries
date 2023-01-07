import styled, { DefaultTheme } from "styled-components";
import Select, { OptionProps, Props, CSSObjectWithLabel } from "react-select";
import { SelectOption } from "../../../types/select";

function MySelect(props: Props<SelectOption | "", false>) {
  return <Select {...props} />;
}

interface SelectThemeProps {
  theme: DefaultTheme;
}

export const StyledCustomSelect = styled(MySelect).attrs({
  styles: {
    control: (base: CSSObjectWithLabel) => ({
      ...base,
      height: "50px",
      padding: "0.25rem",
      backgroundColor: `${({ theme }: SelectThemeProps) => theme.accent_color}`,
      color: `${({ theme }: SelectThemeProps) => theme.text_color}`,
      borderRadius: "var(--br-radius)",
      border: "none",
      boxShadow: `${({ theme }: SelectThemeProps) => theme.shadow}`,
    }),
    option: (
      base: CSSObjectWithLabel,
      state: OptionProps<SelectOption | "", false>
    ) => ({
      ...base,
      cursor: "pointer",
      color: `${({ theme }: SelectThemeProps) => theme.text_color}`,
      backgroundColor: state.isSelected
        ? `${({ theme }: SelectThemeProps) => theme.bg_color}`
        : `${({ theme }: SelectThemeProps) => theme.accent_color}`,
    }),
  },
})`
  width: 200px;
  border-radius: var(--br-radius);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: ${({ theme }) => theme.shadow};
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: ${({ theme }) => theme.text_color} !important;
  }
  & > div[id] {
    background-color: ${({ theme }) => theme.accent_color};
  }
`;
