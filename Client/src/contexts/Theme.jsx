import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState("dark");


    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className={`transition-color duration-300 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
            {children}
          </div>
        </ThemeContext.Provider>
      );
}


export default ThemeProvider;