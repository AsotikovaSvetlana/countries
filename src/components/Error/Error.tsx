import React from "react";
import * as S from "./styles/Error.styles";

interface ErrorProps {
  message: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => (
  <S.Error>{message}</S.Error>
);
