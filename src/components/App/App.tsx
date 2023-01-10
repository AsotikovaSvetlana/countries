import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../../common/styles";
import { HomePage } from "../../pages/HomePage";
import { CountryPage } from "../../pages/CountryPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { Header } from "../Header";
import { Main } from "./components/Main";
import { useAppSelector } from "../../store/hooks";

function App() {
  const theme = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:name" element={<CountryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Main>
      </>
    </ThemeProvider>
  );
}

export { App };
