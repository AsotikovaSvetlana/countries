import React from "react";
import * as S from "./styles/TagMenu.styles";

interface TagMenuProps {
  children: React.ReactNode;
}

export const TagMenu: React.FC<TagMenuProps> = ({ children }) => (
  <S.TagMenu>{children}</S.TagMenu>
);
