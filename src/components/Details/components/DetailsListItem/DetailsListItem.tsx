import React from "react";
import { StyledDetailsListItem } from "./styles/StyledDetailsListItem";

interface DetailsListItemProps {
  title: string;
  info: string | number;
}

export const DetailsListItem: React.FC<DetailsListItemProps> = ({
  title,
  info,
}) => (
  <StyledDetailsListItem>
    <span style={{ fontWeight: "800" }}>{title}:</span> {info}
  </StyledDetailsListItem>
);
