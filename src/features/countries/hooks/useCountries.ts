import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Country } from "../../../types";
import { getCountries } from "../countries-async-actions";

export default function useCountries() {
  const { error, loading, list } = useAppSelector((state) => state.countries);
  const { region, search } = useAppSelector((state) => state.controls);
  const [countries, setCountries] = useState<Country[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    const filtered: Country[] = list.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        item.region.toLowerCase().includes(region.toLowerCase())
    );
    setCountries(filtered);
  }, [region, search, list.length]);

  return { error, loading, countries };
}
