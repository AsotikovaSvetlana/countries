import React from "react";
import { StyledCardInfo } from "./styles/StyledCardInfo";

interface CardInfoProps {
  children: React.ReactNode;
}

export const CardInfo: React.FC<CardInfoProps> = ({ children }) => (
  <StyledCardInfo>{children}</StyledCardInfo>
);
