function UserSearch(){

    // variable para almacenar los usuarios
    const [users, setUsers] = React.useState([
      {
        name: "Hatsune Miku",
        description: "Canta en escenarios virtuales y le encanta el color turquesa."
      },
      {
        name: "Kagamine Rin",
        description: "Ama las canciones energéticas y tiene un lazo inseparable con Len."
      },
      {
        name: "Kagamine Len",
        description: "Siempre acompaña a Rin y toca instrumentos como el piano y la guitarra."
      },
      {
        name: "Megurine Luka",
        description: "Canta en japonés e inglés con una voz suave y elegante."
      },
      {
        name: "Kaito",
        description: "Amante del helado, su voz profunda le da un estilo único."
      },
      {
        name: "Meiko",
        description: "Una de las primeras vocaloids, con voz poderosa y estilo clásico."
      },
      {
        name: "Kasane Teto",
        description: "Originalmente un troll vocaloid, pero ahora es amada por todos."
      },
      {
        name: "IA",
        description: "Tiene una voz etérea y futurista, ideal para baladas y trance."
      },
      {
        name: "GUMI",
        description: "Muy versátil, con una voz cálida que se adapta a muchos géneros."
      }

    ]);
    // variable para guardar el input del usuario
    const [search, setSearch] = React.useState("");

    // variables para crear un nuevo usuario 
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    // variable para mostrar formulario 
    const [form, setForm] = React.useState(false);

    

    //  filtrado de usuarios con el query ingresado usando useMemo
    const filter = React.useMemo(() => {
      console.log("Filtrando usaurios");

      return users.filter(user => {
        const name = user.name.toLowerCase();
        const description = user.description.toLowerCase();
        const query = search.toLowerCase();

        return name.includes(query) || description.includes(query);
      })
    }, [search, users]);

    

      return (
        <div className="container">
          <input
            type="text"
            placeholder="Buscar usuario"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setForm(true)}>+</button>
          <div className="user-list">
            <ul>
              {filter.map((user, index) => (
                <li key={index}>
                  <strong>{user.name}</strong>
                  <p>{user.description}</p>
                </li>
              ))}
            </ul>
          </div>


          {form && (
            <div className="modal">
              <div className="modal-content">
                <h2>Agregar usuario</h2>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Descripcion"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <button
                  onClick={() => {
                    if (name && description) {
                      setUsers([...users, { name: name, description: description }]);
                      setName("");
                      setDescription("");
                      setForm(false);
                    }
                    else{
                      alert("Por favor llenar los campos del usuario");
                    }
                    setName("");
                    setDescription("");

                  }}
                >
                  Agregar
                </button>
                <button onClick={() => {
                  setName("");
                  setDescription("");
                  setForm(false)
                  }}>Cancelar</button>
              </div>
            </div>
          )}

        </div>
      );
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserSearch/>);