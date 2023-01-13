import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTheme } from "./utils/getTheme";

export type ThemeType = "light" | "dark";

const initialState: ThemeType = getTheme();

const themeSlice = createSlice({
  name: "@theme",
  initialState,
  reducers: {
    setTheme: (_, action: PayloadAction<ThemeType>) => action.payload,
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
