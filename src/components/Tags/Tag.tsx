import React from "react";
import { Link } from "react-router-dom";
import { StyledTag } from "./styles/StyledTag";

interface TagProps {
  text: string;
  path: string;
}

export const Tag: React.FC<TagProps> = ({ text, path }) => (
  <StyledTag>
    <Link to={path}>{text}</Link>
  </StyledTag>
);
