import React from "react";
import { IoSearch } from "react-icons/io5";
import { StyledSearch } from "./styles/StyledSearch";
import { Input } from "./components/Input";

interface SearchProps {
  value: string;
  handleSearch: (text: string) => void;
}

export const Search: React.FC<SearchProps> = ({ value, handleSearch }) => (
  <StyledSearch>
    <IoSearch />
    <Input onChange={(e) => handleSearch(e.target.value)} value={value} />
  </StyledSearch>
);
