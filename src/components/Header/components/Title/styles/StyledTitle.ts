import { Link } from "react-router-dom";
import styled from "styled-components";
import * as variables from "../../../../../common/styles/variables";

export const StyledTitle = styled(Link)`
  color: ${({ theme }) => theme.text_color};
  font-size: ${variables.fs_sm};
  font-weight: ${variables.fw_bold};
  text-decoration: none;
`;
