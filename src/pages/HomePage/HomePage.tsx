import React, { useState, useEffect } from "react";
import { CountriesAPI } from "../../api/CountriesAPI";
import { Card } from "../../components/Card";
import { Controls } from "../../components/Controls";
import { List } from "../../components/List";
import { Country } from "../../types";

export const HomePage = () => {
  const [countries, setCountries] = useState<Country[] | []>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await CountriesAPI.getAllCountries();
        setCountries(result);
      } catch (err) {
        setCountries([]);
      }
    })();
  }, []);

  return (
    <>
      <Controls />
      <List>
        {countries.map((item) => {
          const data = {
            img: item.flags.png,
            name: item.name,
            details: [
              {
                title: "Population",
                description: item.population,
              },
              {
                title: "Region",
                description: item.region,
              },
              {
                title: "Capital",
                description: item.capital,
              },
            ],
          };

          return <Card {...data} />;
        })}
      </List>
    </>
  );
};
