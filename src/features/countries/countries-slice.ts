import { createSlice } from "@reduxjs/toolkit";
import { Country } from "../../types";
import { getCountries } from "./countries-async-actions";

type InitialStateType = {
  loading: boolean;
  error: boolean;
  list: Country[];
};

const initialState: InitialStateType = {
  loading: false,
  error: false,
  list: [],
};

const countriesSlice = createSlice({
  name: "@countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getCountries.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default countriesSlice.reducer;
