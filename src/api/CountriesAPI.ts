import axios from "axios";
import { Country } from "../types";

export const CountriesAPI = {
  baseUrl: "https://restcountries.com/v2",
  fields: "name,capital,flags,population,region,alpha3Code,borders",
  async getAllCountries(): Promise<Country[]> {
    const res = await axios.get(`${this.baseUrl}/all?fields=${this.fields}`);
    return res.data;
  },
  async getCountryByName(name: string): Promise<Country> {
    const res = await axios.get(`${this.baseUrl}/name/${name}`);
    return res.data[0];
  },
  async getCountriesByCode(code: string): Promise<Country[]> {
    const res = await axios.get(`${this.baseUrl}/alpha?codes=${code}`);
    return res.data;
  },
};
