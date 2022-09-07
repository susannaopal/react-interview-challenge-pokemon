import { Routes, Route } from "react-router-dom";
import './App.css';
import CaughtPokemon from './Views/CaughtPokemon.js';

function App() {

  return (
    <div className="p-10">
      <header className="text-2xl font-bold text-center tracking-tight text-gray-900">
        Pokemon Tracker 
      </header>
      <Routes>
        <Route index element={<CaughtPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
