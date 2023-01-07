import React from "react";
import { StyledCustomSelect } from "./styles/StyledCustomSelect";
import { SelectOption } from "../../types";
import { SingleValue } from "react-select";

interface CustomSelectProps {
  options: SelectOption[];
  placeholder: string;
  isClearable: boolean;
  isSearchable: boolean;
  value: SelectOption | "";
  onChange: (reg: SingleValue<SelectOption | "">) => void;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  placeholder,
  isClearable,
  isSearchable,
  onChange,
}) => (
  <StyledCustomSelect
    options={options}
    value={value}
    placeholder={placeholder}
    isClearable={isClearable}
    isSearchable={isSearchable}
    onChange={onChange}
  />
);
