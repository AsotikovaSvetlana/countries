import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Button } from "../../components/Button";
import { CountryDetails } from "../../features/details/CountryDetails";

export const CountryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <CountryDetails />
    </>
  );
};
