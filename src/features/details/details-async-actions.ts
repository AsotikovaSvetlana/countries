import { createAsyncThunk } from "@reduxjs/toolkit";
import { Country, Extra } from "../../types";

export const getDetails = createAsyncThunk<Country, string, { extra: Extra }>(
  "@details/fetch-details",
  (name, { extra: { api } }) => api.getCountryByName(name)
);

export const getBorderCountries = createAsyncThunk<
  Country[],
  string,
  { extra: Extra }
>("@details/fetch-borders", (codes, { extra: { api } }) =>
  api.getCountriesByCode(codes)
);
