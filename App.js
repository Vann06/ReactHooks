const {useContext} = React;
const { ThemeProvider, ThemeContext } = window;



function ThemeToggle() {
    const { toggleTheme, theme } = useContext(ThemeContext);
  
    const buttonText = theme === "light" ? "Cambiar a oscuro" : "Cambiar a claro";
  
    return (
      <button className={`theme-button ${theme}`} onClick={toggleTheme}>
        {buttonText}
      </button>
    );
  }
  

  function ThemeDisplay() {
    const { theme } = useContext(ThemeContext);
    const imgUrl = theme === "light" 
    ? "https://i.postimg.cc/BbxHMQdr/images-removebg-preview.png" 
    : "https://i.imgflip.com/9t8y0s.gif";
    return (
      <div className={`card ${theme}`}>
        <h2>Tema Actual : {theme === "light" ? "Claro" : "Oscuro"}</h2>
        <img src={imgUrl} alt="dibujito" className={`theme-img ${theme}`} />
        </div>
    );
  }



  function App() {  
    return (
      <ThemeProvider>
        <InnerApp/>
      </ThemeProvider>
    );
  }

  function InnerApp() {
    const { theme } = useContext(ThemeContext);
    return (
      <div className={`app-container ${theme}`}>
        <h1>Ejemplo de Contexto con React CDN</h1>
        <p>
        {theme === "light"
            ? "¡Disfruta el sol y la energía positiva!"
            : "Relájate con un ambiente nocturno encantador."}
        </p>
        <ThemeDisplay />
        <ThemeToggle />
      </div>
    );
  }
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
