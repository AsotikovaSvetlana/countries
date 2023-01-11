import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./CountriesList.styles";
import { Card } from "../../components/Card";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import useCountries from "./hooks/useCountries";

export const CountriesList = () => {
  const navigate = useNavigate();
  const { countries, error, loading } = useCountries();

  return (
    <>
      {error && !loading && <Error message="Can't get data" />}
      {!loading ? (
        <S.CountriesList>
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

            return (
              <Card
                key={item.name}
                onClick={() =>
                  navigate(`/country/${item.name.toLocaleLowerCase()}`)
                }
                {...data}
              />
            );
          })}
        </S.CountriesList>
      ) : (
        <Loader />
      )}
    </>
  );
};
