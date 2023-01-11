import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSearch } from "../controls-slice";

export default function useSearch() {
  const search = useAppSelector((state) => state.controls.search);
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return { search, handleSearch };
}
