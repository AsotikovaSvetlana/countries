import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { clearControls } from "../controls-slice";

export default function useCleanControls() {
  const dispatch = useAppDispatch();

  const cleanControls = () => dispatch(clearControls());

  return cleanControls;
}
