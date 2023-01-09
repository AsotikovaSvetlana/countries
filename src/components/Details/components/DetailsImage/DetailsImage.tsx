import React from "react";
import { StyledDetailsImage } from "./styles/StyledDetailsImage";

interface DetailsImageProps {
  src: string;
  alt: string;
}

export const DetailsImage: React.FC<DetailsImageProps> = ({ src, alt }) => (
  <StyledDetailsImage src={src} alt={alt} />
);
