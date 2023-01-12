import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getDetails, getBorderCountries } from "../details-async-actions";
import { clearDetails } from "../details-slice";

export default function useDetails() {
  const { name } = useParams();
  const dispatch = useAppDispatch();
  const { error, loading, borders, country } = useAppSelector(
    (state) => state.details
  );

  useEffect(() => {
    if (!name) return;
    dispatch(getDetails(name));

    return () => {
      dispatch(clearDetails());
    }
  }, [name]);

  useEffect(() => {
    if (country?.borders) {
      dispatch(getBorderCountries(country.borders.join(",")));
    }
  }, [country?.name]);

  return { country, error, loading, borders };
}
