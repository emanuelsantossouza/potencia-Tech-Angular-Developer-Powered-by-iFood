const pokeapiShowDetails = {};

// Convertendo os dados da PokeApi para o dados do nosso models, deixando mais facies de utilizar no html
function convertPokemonDetailToPokemonShowDetailsModels(pokeDetail) {
  const pokemonShowDetails = new PokemonShowDetails();
  pokemonShowDetails.name = pokeDetail.name;
  pokemonShowDetails.id = pokeDetail.id;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemonShowDetails.types = types;
  pokemonShowDetails.type = type;

  pokemonShowDetails.photo = pokeDetail.sprites.other.dream_world.front_default;
  pokemonShowDetails.specie = type;
  pokemonShowDetails.height = pokeDetail.height;
  pokemonShowDetails.weight = pokeDetail.weight;
  pokemonShowDetails.abilities = pokeDetail.abilities.map(
    (abilityShow) => abilityShow.ability.name
  ).join(", ");

  return pokemonShowDetails;
}


pokeapiShowDetails.getPokemonsDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((reponse) => reponse.json())
    .then(convertPokemonDetailToPokemonShowDetailsModels);
};


// Transformando o pokemon details em Json
pokeapiShowDetails.getPokemons = (offset = 0, limit = 1) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((Response) => Response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeapiShowDetails.getPokemonsDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((PokemonsDetail) => PokemonsDetail);
};


   