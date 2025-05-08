
const ThemeContext = React.createContext();


function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

window.ThemeContext = ThemeContext;
window.ThemeProvider = ThemeProvider;
