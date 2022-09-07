import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import CaughtPokemon from './Views/CaughtPokemon.js';
import PokemonDetails from './Views/PokemonDetails.js';

function App() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  return (
    <div className="p-10">
      <header className="text-2xl font-bold text-center tracking-tight text-gray-900">
        Pokemon Tracker 
      </header>
      <Routes>
        <Route index element={<CaughtPokemon caughtPokemon={caughtPokemon} setCaughtPokemon={setCaughtPokemon}/>} />
        <Route path=":pokemonName" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
