import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../../common/styles";
import { HomePage } from "../../pages/HomePage";
import { Header } from "../Header";
import { Main } from "./components/Main";
import useTheme from "../../common/hooks/useTheme";

function App() {
  const { theme, isLightMode, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Main>
      </>
    </ThemeProvider>
  );
}

export { App };
