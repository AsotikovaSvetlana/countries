import { createAsyncThunk } from "@reduxjs/toolkit";
import { Country } from "../../types";

export const getCountries = createAsyncThunk<Country[], void, { extra: any }>(
  "@countries/fetch-countries",
  async (_, { extra: CountriesAPI }) => {
    return CountriesAPI.getAllCountries();
  }
);
