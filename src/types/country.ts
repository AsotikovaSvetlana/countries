export type Country = {
  name: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
  alpha3Code: string;
  borders?: string[];
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
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
