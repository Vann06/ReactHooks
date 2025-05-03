function Stopwatch(){

    // variable para almacenar los segundos empieza en 0 
    const [seconds, setSeconds] = React.useState(0);
    // variable para conocer el estado del reloj, esta apagado
    const [isRunning, setIsRunning] = React.useState(false);
    // variable para almacenar las sessiones del reloj 
    const [sessions, setSessions] = React.useState([]);


    // referencia para el intervalo que no se pierda el estado y guardar el intervalo 
    const cambioSegundos = React.useRef(null);

    // Iniciar el cronometro para cambiar el numero del segundo actual
    React.useEffect(() => {
        console.log("isRunning", isRunning);

        if(isRunning){
            cambioSegundos.current = setInterval(() => {
              // agregarle un numero mas
                setSeconds(prev => prev+1);
            },1000)
        }
        else {
            clearInterval(cambioSegundos.current);
        }

        return() => clearInterval(cambioSegundos.current);
    }, [isRunning]);

    const toggleStartPause = () => {
        setIsRunning(prev => !prev);
    };

    const reset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    const saveSession = () => {
        setSessions(prev => [...prev,seconds]);
    };

    return (
        <div>
          <h1>{seconds} segundos</h1>
          <button onClick={toggleStartPause}>
            {isRunning ? 'Pausar' : 'Iniciar'}
          </button>
          <button onClick={reset}>Reiniciar</button>
          <button onClick={saveSession}>Guardar sesión</button>
    
          <ul>
            {sessions.map((s, i) => (
              <li key={i}>Sesión {i + 1}: {s} segundos</li>
            ))}
          </ul>
        </div>
      );
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Stopwatch />);