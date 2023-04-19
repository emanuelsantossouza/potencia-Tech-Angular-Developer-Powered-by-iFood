const pokeapi = {};

// transformando o pokemon details em Json
pokeapi.getPokemonsDetail = (pokemon) => {
  return fetch(pokemon.url).then((reponse) => reponse.json());
};

pokeapi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((Response) => Response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeapi.getPokemonsDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((PokemonsDetail) => PokemonsDetail)
};