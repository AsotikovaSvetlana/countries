import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTheme } from "./utils/getTheme";

const initialState: string = getTheme();

const themeSlice = createSlice({
  name: "@theme",
  initialState,
  reducers: {
    setTheme: (_, action: PayloadAction<string>) => action.payload,
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
