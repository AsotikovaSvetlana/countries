import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.accent_color};
`;

export const Title = styled(Link)`
  color: ${({ theme }) => theme.text_color};
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;
