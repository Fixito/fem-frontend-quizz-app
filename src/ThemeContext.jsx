import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext(null);

const defaultTheme = localStorage.getItem("theme") || "light";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }

  return themeContext;
};

export { ThemeProvider };
