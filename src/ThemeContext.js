import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = function (props) {
  const [theme, setTheme] = useState(true);

  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>
      {props.children}
    </ThemeContext.Provider>
  );
};
