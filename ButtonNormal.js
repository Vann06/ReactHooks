

const ButtonNormal = React.memo(function ButtonNormal({ onClick }) {
  console.log("ButtonNormal se volvió a renderizar");

  return (
    <button 
        className="normal-button" 
          onClick={() => {
            onClick();
          }}
          >
      +1 no optimizado
    </button>
  );
});
