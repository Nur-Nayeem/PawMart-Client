import { useState } from "react";
import { ThemeContext } from "./Contexts";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const themeInfo = {
    theme,
    setTheme,
  };
  return <ThemeContext value={themeInfo}>{children}</ThemeContext>;
};

export default ThemeProvider;
