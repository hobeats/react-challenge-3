import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darktheme, lighttheme} from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev); 
  };

  return (
    <ThemeProvider theme={isDarkMode ? darktheme : lighttheme}>
      <button onClick={toggleTheme}>
        {isDarkMode ? '라이트모드' : '다크모드'}
      </button>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client ={queryClient}>
      <Root/>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
