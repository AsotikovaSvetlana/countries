import { createAsyncThunk } from "@reduxjs/toolkit";
import { Country } from "../../types";

export const getDetails = createAsyncThunk<Country, string, { extra: any }>(
  "@details/fetch-details",
  async (name, { extra: CountriesAPI }) => CountriesAPI.getCountryByName(name)
);

export const getBorderCountries = createAsyncThunk<
  Country[],
  string,
  { extra: any }
>("@details/fetch-borders", async (codes, { extra: CountriesAPI }) =>
  CountriesAPI.getCountriesByCode(codes)
);
