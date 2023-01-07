import styled from "styled-components";

export const StyledInput = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text_color};
  background-color: ${({ theme }) => theme.accent_color};
`;
