
const ButtonOptimizado = React.memo(function ButtonOptimizado({ onClick }) {
  console.log("ButtonOptimizado se renderizo");

  return (
    <button className="optimized-button" onClick={onClick}>
      numero random optimizado 
    </button>
  );
});
