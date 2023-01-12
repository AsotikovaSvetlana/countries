import React from "react";
import useDetails from "./hooks/useDetails";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { Details } from "./Details";

export const CountryDetails = () => {
  const { country, error, loading, borders } = useDetails();

  return (
    <>
      {error && <Error message="Can't get details" />}
      {loading && <Loader />}
      {country && <Details {...country} borders={borders} />}
    </>
  );
};
