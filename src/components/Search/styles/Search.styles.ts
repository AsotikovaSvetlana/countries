import styled from "styled-components";

export const Search = styled.label`
  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  border-radius: var(--br-radius);
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.accent_color};

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

export const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text_color};
  background-color: ${({ theme }) => theme.accent_color};
`;
