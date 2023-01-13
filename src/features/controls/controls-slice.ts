import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Region } from "../../types";

type ControlsType = {
  search: string;
  region: Region | "";
};

const initialState: ControlsType = {
  search: "",
  region: "",
};

const controlsSlice = createSlice({
  name: "@controls",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<Region | "">) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  },
});

export default controlsSlice.reducer;
export const { setSearch, setRegion, clearControls } = controlsSlice.actions;
