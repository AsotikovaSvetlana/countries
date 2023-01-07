import React from "react";
import { StyledInput } from "./styles/StyledInput";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input: React.FC<InputProps> = ({ onChange, value }) => {
  return <StyledInput value={value} onChange={onChange} />;
};
