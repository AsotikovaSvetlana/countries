import { Region } from "./region";

export type Country = {
  name: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: Region;
  alpha3Code: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
  borders?: string[];
};

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Language = {
  name: string;
  nativeName: string;
};
