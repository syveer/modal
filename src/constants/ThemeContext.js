import React, { createContext, useState, useContext } from 'react';
import { themes } from '../constants/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => {
      const currentIndex = themes.indexOf(prevTheme);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
