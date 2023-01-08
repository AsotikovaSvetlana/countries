import React from "react";
import { StyledCard } from "./styles/StyledCard";
import { CardImage } from "./components/CardImage";
import { CardInfo } from "./components/CardInfo";
import { CardTitle } from "./components/CardTitle";
import { CardList } from "./components/CardList";
import { CardListItem } from "./components/CardListItem";

type Detail = {
  title: string;
  description: string | number;
};

interface CardProps {
  img: string;
  name: string;
  details: Detail[];
}

export const Card: React.FC<CardProps> = ({ img, name, details }) => (
  <StyledCard>
    <CardImage src={img} alt={name} />
    <CardInfo>
      <CardTitle>{name}</CardTitle>
      <CardList>
        {details.map(({ title, description }) => (
          <CardListItem key={title} title={title} description={description} />
        ))}
      </CardList>
    </CardInfo>
  </StyledCard>
);
