import React from "react";
import * as S from "./Details.styles";
import { TagMenu, Tag } from "../../components/Tags";
import { Country } from "../../types";

interface DetailsProps
  extends Pick<
    Country,
    | "flags"
    | "nativeName"
    | "population"
    | "region"
    | "subregion"
    | "capital"
    | "topLevelDomain"
    | "currencies"
    | "languages"
    | "name"
  > {
  borders: Country[];
}

export const Details: React.FC<DetailsProps> = ({
  flags,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => (
  <S.Details>
    <S.DetailsImage src={flags.svg} alt={name} />
    <div>
      <S.DetailsTitle>{name}</S.DetailsTitle>
      <S.DetailsGroup>
        <S.DetailsList>
          <S.DetailsListItem>
            <span style={{ fontWeight: 800 }}>Native Name:</span> {nativeName}
          </S.DetailsListItem>
          <S.DetailsListItem>
            <span style={{ fontWeight: 800 }}>Population:</span> {population}
          </S.DetailsListItem>
          <S.DetailsListItem>
            <span style={{ fontWeight: 800 }}>Region:</span> {region}
          </S.DetailsListItem>
          <S.DetailsListItem>
            <span style={{ fontWeight: 800 }}>Sub Region:</span> {subregion}
          </S.DetailsListItem>
          <S.DetailsListItem>
            <span style={{ fontWeight: 800 }}>Capital:</span> {capital}
          </S.DetailsListItem>
        </S.DetailsList>
        <S.DetailsList>
          <S.DetailsListItem>
            <span style={{ fontWeight: 800 }}>Top Level Domain:</span>{" "}
            {topLevelDomain.join(", ")}
          </S.DetailsListItem>
          <S.DetailsListItem>
            <span style={{ fontWeight: 800 }}>Currency:</span>{" "}
            {currencies.map((item) => item.name).join(", ")}
          </S.DetailsListItem>
          <S.DetailsListItem>
            <span style={{ fontWeight: 800 }}>Languages:</span>{" "}
            {languages.map((item) => item.name).join(", ")}
          </S.DetailsListItem>
        </S.DetailsList>
      </S.DetailsGroup>
      <S.DetailsTags>
        <span style={{ marginBottom: "2px", fontWeight: 800 }}>
          Border Countries:
        </span>
        {!borders.length ? (
          <span>There is no border countries</span>
        ) : (
          <TagMenu>
            {borders.map((item) => (
              <Tag
                key={item.name}
                text={item.name}
                path={`/country/${item.name.toLowerCase()}`}
              />
            ))}
          </TagMenu>
        )}
      </S.DetailsTags>
    </div>
  </S.Details>
);
