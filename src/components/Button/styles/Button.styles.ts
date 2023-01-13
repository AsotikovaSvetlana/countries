import styled from "styled-components";

export const Button = styled.button`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  line-height: 2.5;
  background-color: ${({ theme }) => theme.accent_color};
  border: none;
  border-radius: var(--br-radius);
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text_color};
  cursor: pointer;
`;
