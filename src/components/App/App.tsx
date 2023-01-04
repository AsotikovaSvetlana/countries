import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../../common/styles";
import { Home } from "../../pages/Home";
import { Header } from "../Header";

function App() {
  const [theme, setTheme] = useState("light");
  const isLightMode = theme === "light";

  const toggleTheme = (e: React.MouseEvent<HTMLDivElement>) => {
    const newTheme = isLightMode ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </>
    </ThemeProvider>
  );
}

export { App };
