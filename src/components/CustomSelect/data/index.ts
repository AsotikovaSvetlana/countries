import { Region } from "../../../types";

type RegionOption = {
  [Key in Region]: { value: Key; label: Key };
};

export const optionsMap: RegionOption = {
  Africa: { value: "Africa", label: "Africa" },
  America: { value: "America", label: "America" },
  Asia: { value: "Asia", label: "Asia" },
  Europe: { value: "Europe", label: "Europe" },
  Oceania: { value: "Oceania", label: "Oceania" },
};

export const options = Object.values(optionsMap);
