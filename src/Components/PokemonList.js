function PokemonList({ caughtPokemon }) {
  return (
    <main className="mx-auto max-w-2xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Caught Pokemon</h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {caughtPokemon.map((pokemon) => (
          <div key={pokemon.name} className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img
                src={pokemon.image}
                alt={`${pokemon.name}`}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <p className="mt-1 text-sm text-gray-500">
                Breed: {pokemon.name}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Level: {pokemon.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default PokemonList;
