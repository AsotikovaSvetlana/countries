import React from "react";
import { StyledCardImage } from "./styles/StyledCardImage";

interface CardImageProps {
  src: string;
  alt: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt }) => (
  <StyledCardImage src={src} alt={alt} />
);
