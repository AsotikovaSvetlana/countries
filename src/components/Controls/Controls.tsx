import React, { useState } from "react";
import { StyledControls } from "./styles/StyledControls";
import { Search } from "../Search";
import { CustomSelect } from "../CustomSelect";
import { options } from "./data";
import { SelectOption } from "../../types";
import { SingleValue } from "react-select";

type Region = SelectOption | "";

export const Controls = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<Region>("");

  const handleSelect = (reg: SingleValue<Region>) => {
    if (reg) {
      setRegion(reg);
    }
  };

  return (
    <StyledControls>
      <Search value={search} handleSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={handleSelect}
      />
    </StyledControls>
  );
};
