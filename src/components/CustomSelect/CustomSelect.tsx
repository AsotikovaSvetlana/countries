import React from "react";
import * as S from "./styles/CustomSelect.styles";
import { options, optionsMap } from "../../components/CustomSelect/data";
import useSelect from "../../features/controls/hooks/useSelect";

export const CustomSelect = () => {
  const { region, handleSelect } = useSelect();

  return (
    <S.CustomSelect
      options={options}
      value={region in optionsMap ? optionsMap[region] : ""}
      placeholder="Filter by Region"
      isClearable
      isSearchable={false}
      onChange={handleSelect}
    />
  );
};
