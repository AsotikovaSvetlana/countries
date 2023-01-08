import styled from "styled-components";

export const StyledCardImage = styled.img`
  width: 100%;
  height: 150px;
  display: block;
  object-fit: cover;
  object-position: center;
  box-shadow: ${({ theme }) => theme.shadow};
`;
