import React from "react";
import { IoSearch } from "react-icons/io5";
import * as S from "./styles/Search.styles";
import useSearch from "../../features/controls/hooks/useSearch";

export const Search = () => {
  const { search, handleSearch } = useSearch();

  return (
    <S.Search>
      <IoSearch />
      <S.Input value={search} onChange={handleSearch} />
    </S.Search>
  );
};
