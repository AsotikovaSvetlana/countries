import { createSlice } from "@reduxjs/toolkit";
import { Country } from "../../types";
import { getDetails, getBorderCountries } from "./details-async-actions";

type InitialStateType = {
  loading: boolean;
  error: boolean;
  country: Country | null;
  borders: Country[];
};

const initialState: InitialStateType = {
  loading: false,
  error: false,
  country: null,
  borders: [],
};

const detailsSlice = createSlice({
  name: "@details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.country = action.payload;
      })
      .addCase(getDetails.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getBorderCountries.fulfilled, (state, action) => {
        state.borders = action.payload;
      })
  },
});

export default detailsSlice.reducer;
export const { clearDetails} = detailsSlice.actions;
