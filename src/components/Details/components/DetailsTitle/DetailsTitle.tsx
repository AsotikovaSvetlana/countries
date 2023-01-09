import React from "react";
import { StyledDetailsTitle } from "./styles/StyledDetailsTitle";

interface DetailsTitleProps {
  title: string;
}

export const DetailsTitle: React.FC<DetailsTitleProps> = ({ title }) => (
  <StyledDetailsTitle>{title}</StyledDetailsTitle>
);
