import { useState } from 'react';
import PokemonForm from '../Components/PokemonForm.js';
import PokemonList from '../Components/PokemonList.js';

function CaughtPokemon({ setCaughtPokemon, caughtPokemon }) {
  const [pokeName, setPokeName] = useState('');
  const [pokeLevel, setPokeLevel] = useState(0);
  const [pokeImage, setPokeImage] = useState('');

  const submitNewPokemon = (e) => {
    e.preventDefault();
    const newPokemon = {
      name: pokeName,
      level: pokeLevel,
      image: pokeImage,
    }
    setPokeName('');
    setPokeLevel(0);
    setPokeImage('');
  }

  return (
    <>
      <PokemonForm submitNewPokemon={submitNewPokemon} pokeName={pokeName} pokeLevel={pokeLevel} pokeImage={pokeImage} setPokeName={setPokeName} setPokeImage={setPokeImage} setPokeLevel={setPokeLevel} />
      <PokemonList caughtPokemon={caughtPokemon} />
    </>
  );
}

export default CaughtPokemon;
