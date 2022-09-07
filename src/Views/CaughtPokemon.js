import { useState } from 'react';
import PokemonForm from '../Components/PokemonForm.js';
import PokemonList from '../Components/PokemonList.js';

function CaughtPokemon() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const [pokeName, setPokeName] = useState('');
  const [pokeLevel, setPokeLevel] = useState(0);
  const [pokeImage, setPokeImage] = useState('');

  const submitNewPokemon = (e) => {
    e.preventDefault();
    const newPokemon = {
      name: e.target.elements['poke-name'].value,
      level: e.target.elements['poke-level'].value,
      image: e.target.elements['poke-image'].value,
    }
    const pokemon = [...caughtPokemon, newPokemon]
    setCaughtPokemon(pokemon);
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
