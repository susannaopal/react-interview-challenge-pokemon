import { useLocation, Link } from "react-router-dom";

function PokemonDetails() {
  const pokemon = useLocation();
  return (
    <>
      <p>{pokemon.state.name}</p>
      <p>{pokemon.state.level}</p>
      <img
        src={pokemon.state.image}
        alt={`pokemon named ${pokemon.state.name}`}
      />
      <Link to="/">
        <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Home
        </button>
      </Link>
    </>
  );
}

export default PokemonDetails;
