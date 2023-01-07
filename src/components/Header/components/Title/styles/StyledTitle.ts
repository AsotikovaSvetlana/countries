import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledTitle = styled(Link)`
  color: ${({ theme }) => theme.text_color};
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;
