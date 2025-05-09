const { useState, useCallback } = React;

function App() {
  // variable de numero aleatorio
  const [randomNumber, setRandomNumber] = useState(0);

  //  Estado para el contador
  const [counter, setCounter] = useState(0);

  // funcion NO optimizada (se crea cada vez que se renderiza el componente)
  const addCounter = () => {
    console.log("Función addCounter se creó");
    setCounter((prev) => prev + 1);
  };

  // funcion SI optimizada (se memoriza la función)
  const createRandom = useCallback(() => {
    console.log("Función createRandom ejecutada");
    const random = Math.floor(Math.random() * 100);
    setRandomNumber(random);
  }, []); 

  return (
    <div className="card">
      <h1>Ejercicio de useCallback</h1>
      <div className="button-area">
  <div className="button-group">
    <div className="counter-box">Contador: {counter}</div>
    <ButtonNormal onClick={addCounter} />
  </div>

  <div className="button-group">
    <div className="counter-box">Aleatorio: {randomNumber}</div>
    <ButtonOptimizado onClick={createRandom} />
  </div>
</div>
      

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
