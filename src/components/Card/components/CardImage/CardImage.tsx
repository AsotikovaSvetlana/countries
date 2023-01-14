import React from "react";
import * as S from "./styles/CardImage.styles";

interface CardImageProps {
  src: string;
  alt: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt }) => (
  <S.CardImage src={src} alt={alt} />
);
