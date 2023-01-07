import axios from "axios";
import { Country } from "./types";

export const CountriesAPI = {
  baseUrl: "https://restcountries.com/v2",
  fields: "name,capital,flags,population,region,alpha3Code,borders",
  async getAllCountries(): Promise<Country[]> {
    const res = await axios.get(`${this.baseUrl}/all?fields=${this.fields}`);
    return res.data;
  },
  async getCountriesByRegion(region: string): Promise<Country[]> {
    const res = await axios.get(
      `${this.baseUrl}/region/${region}?fields=${this.fields}`
    );
    return res.data;
  },
  async getCountryByName(name: string): Promise<Country[]> {
    const res = await axios.get(
      `${this.baseUrl}/name/${name}?fields=${this.fields}`
    );
    return res.data;
  },
  async getCountryByCode(code: string): Promise<Country[]> {
    const res = await axios.get(
      `${this.baseUrl}/alpha/${code}?fields=${this.fields}`
    );
    return res.data;
  },
};
