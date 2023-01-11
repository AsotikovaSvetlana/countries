import React from "react";
import * as S from "./Controls.styles";
import { Search } from "../../components/Search";
import { CustomSelect } from "../../components/CustomSelect";

export const Controls = () => (
  <S.Controls>
    <Search />
    <CustomSelect />
  </S.Controls>
);
