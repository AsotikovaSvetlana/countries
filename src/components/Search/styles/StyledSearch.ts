import styled from "styled-components";

export const StyledSearch = styled.label`
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
