import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setRegion } from "../controls-slice";
import { SingleValue } from "react-select";
import { SelectOption } from "../../../types";

export default function useSelect() {
  const region = useAppSelector((state) => state.controls.region);
  const dispatch = useAppDispatch();

  const handleSelect = (reg: SingleValue<SelectOption | "">) => {
    if (reg) {
      dispatch(setRegion(reg.value));
    } else {
      dispatch(setRegion(""));
    }
  };

  return { region, handleSelect };
}
