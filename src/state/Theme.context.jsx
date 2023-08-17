import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

  const toggleTheme = () => {
  }

  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme }} displayName="ThemeContext">
      {children}
    </ThemeContext.Provider>
  );
};
