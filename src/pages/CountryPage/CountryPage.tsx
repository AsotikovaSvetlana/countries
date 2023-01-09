import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CountriesAPI } from "../../api/CountriesAPI";
import { Details } from "../../components/Details";
import { Country } from "../../types";

export const CountryPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (!name) return;
        const res = await CountriesAPI.getCountryByName(name);
        setCountry(res[0]);
      } catch (err) {
        setCountry(null);
      }
    })();
  }, [name]);

  return <>{country && <Details country={country} />}</>;
};
