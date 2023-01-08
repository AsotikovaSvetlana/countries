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
};
