import PokemonDetails from '../Views/PokemonDetails'
//needed to import the PokeDetails file 
function PokemonForm({ submitNewPokemon, pokeName, pokeLevel, pokeImage, setPokeLevel, setPokeImage, setPokeName }) {


  //form does not seem to have any kind of functionality => submission does nothing
  //what is legend? fieldset? => 
  //onChange is working but it isn't updating anything (can see this updated in the react tools)
  //button will need an onClick function to capture the data updated in the onChange

  /* Bug 1
When the user clicks 'submit' on the form, the data does not update.
 */

//create functionality for an onClick

const submitData = (event) => {
  event.preventDefault()
  console.log("Am I even submitting?")
}

   
  return (
    <form onSubmit={(e) => submitNewPokemon(e)}>

      <fieldset className="overflow-hidden shadow sm:rounded-md">
        <div className="bg-white px-4 py-5 sm:p-6">
          <legend className="sr-only">Add New Pokemon</legend>
          <div className="text-base font-medium text-gray-900" aria-hidden="true">
            Add New Pokemon
          </div>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label htmlFor="poke-name" className="block text-sm font-medium text-gray-700">Pokemon Name</label>
              <input onChange={(e) => setPokeName(e.target.value)} value={pokeName} type="text" name="poke-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></input>
            </div>
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
             <label htmlFor="poke-level" className="block text-sm font-medium text-gray-700">Pokemon Level</label>
              <input onChange={(e) => setPokeLevel(e.target.value)} value={pokeLevel} type="number" name="poke-level" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></input>
            </div>
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label htmlFor="poke-image" className="block text-sm font-medium text-gray-700">Pokemon Image</label>
              <input onChange={(e) => setPokeImage(e.target.value)} value={pokeImage} type="text" name="poke-image" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></input>
            </div>
          </div>
          <div className="col-span-12 pt-5">
            <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={submitData}>Submit</button>
          </div>
        </div>
      </fieldset>
  
    </form>
  );
}

export default PokemonForm;