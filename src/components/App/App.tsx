import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../../common/styles";

function App() {
  const [theme, setTheme] = useState("light");
  const isLightMode = theme === "light";

  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <header className="App-header">1111</header>
        </div>
      </>
    </ThemeProvider>
  );
}

export { App };
