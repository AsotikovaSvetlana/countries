import { createAsyncThunk } from "@reduxjs/toolkit";
import { Country, Extra } from "../../types";

export const getCountries = createAsyncThunk<Country[], void, { extra: Extra }>(
  "@countries/fetch-countries",
  (_, { extra: { api } }) => api.getAllCountries()
);
