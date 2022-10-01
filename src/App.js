import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import CaughtPokemon from './Views/CaughtPokemon.js';
import PokemonDetails from './Views/PokemonDetails.js';

//to create functionality to pass down in order to add to the form (think ideabox like)

function App() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);
//need to update the state(useEffect? although atm only have an empty array)

  return (
    <div className="p-10">
      <header className="text-2xl font-bold text-center tracking-tight text-gray-900">
        Pokemon Tracker 
      </header>
      {/* <PokemonDetails /> */}
      <Routes>
        <Route index element={<CaughtPokemon caughtPokemon={caughtPokemon} setCaughtPokemon={setCaughtPokemon}/>} />
        <Route path=":pokemonName" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
