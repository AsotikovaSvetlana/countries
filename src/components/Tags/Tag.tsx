import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles/Tag.styles";

interface TagProps {
  text: string;
  path: string;
}

export const Tag: React.FC<TagProps> = ({ text, path }) => (
  <S.Tag>
    <Link to={path}>{text}</Link>
  </S.Tag>
);
