import { useLocation, Link } from "react-router-dom";
//https://www.educative.io/answers/how-to-use-the-uselocation-hook-in-react

//needed to remove state from the return to access the object properties 
//do i need more state for the object?


function PokemonDetails() {
  const pokemon = useLocation();
  console.log("Pathway url location", pokemon)
//above hook tells us pathway
  return (
    <>
      <p>{pokemon.name}</p>
      <p>{pokemon.level}</p>
      <img
        src={pokemon.image}
        alt={`pokemon named ${pokemon.name}`}
      />
      <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Home
      </button>
    </>
  );
}

export default PokemonDetails;
