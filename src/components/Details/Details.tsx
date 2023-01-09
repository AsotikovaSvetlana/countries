import React, { useState, useEffect } from "react";
import { Country } from "../../types";
import { TagMenu, Tag } from "../Tags";
import { DetailsGroup } from "./components/DetailsGroup";
import { DetailsImage } from "./components/DetailsImage";
import { DetailsList } from "./components/DetailsList";
import { DetailsListItem } from "./components/DetailsListItem";
import { DetailsTags } from "./components/DetailsTags";
import { DetailsTitle } from "./components/DetailsTitle";
import { StyledDetails } from "./styles/StyledDetails";
import { CountriesAPI } from "../../api/CountriesAPI";

interface DetailsProps {
  country: Country;
}

export const Details: React.FC<DetailsProps> = ({ country }) => {
  const [borderCountries, setBorderCountries] = useState<Country[] | null>(
    null
  );

  useEffect(() => {
    (async () => {
      if (!country.borders) return;
      const res = await CountriesAPI.getCountryByCode(
        country.borders.join(",")
      );
      setBorderCountries(res);
    })();
  }, [country.borders]);

  return (
    <StyledDetails>
      <DetailsImage src={country.flags.svg} alt={country.name} />
      <div>
        <DetailsTitle title={country.name} />
        <DetailsGroup>
          <DetailsList>
            <DetailsListItem title="Native Name" info={country.nativeName} />
            <DetailsListItem title="Population" info={country.population} />
            <DetailsListItem title="Region" info={country.region} />
            <DetailsListItem title="Sub Region" info={country.subregion} />
            <DetailsListItem title="Capital" info={country.capital} />
          </DetailsList>
          <DetailsList>
            <DetailsListItem
              title="Top Level Domain"
              info={country.topLevelDomain.join(", ")}
            />
            <DetailsListItem
              title="Currency"
              info={country.currencies.map((item) => item.name).join(", ")}
            />
            <DetailsListItem
              title="Languages"
              info={country.languages.map((item) => item.name).join(", ")}
            />
          </DetailsList>
        </DetailsGroup>
        <DetailsTags>
          <span style={{ marginBottom: "2px", fontWeight: 800 }}>
            Border Countries:
          </span>
          {!country.borders ? (
            <span>There is no border countries</span>
          ) : (
            <TagMenu>
              {borderCountries &&
                borderCountries.map((item) => (
                  <Tag
                    key={item.name}
                    text={item.name}
                    path={`/country/${item.name.toLowerCase()}`}
                  />
                ))}
            </TagMenu>
          )}
        </DetailsTags>
      </div>
    </StyledDetails>
  );
};
