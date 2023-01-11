import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  search: string;
  region: string;
};

const initialState: InitialStateType = {
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
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  },
});

export default controlsSlice.reducer;
export const { setSearch, setRegion, clearControls } = controlsSlice.actions;
