const pokeapi = {};

// Convertendo os dados da PokeApi para o dados do nosso models, deixando mais facies de utilizar no html
function convertPokemonDetailToPokemonModels(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.name = pokeDetail.name;
  pokemon.number = pokeDetail.id;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

// Transformando o pokemon details em Json
pokeapi.getPokemonsDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((reponse) => reponse.json())
    .then((convertPokemonDetailToPokemonModels));
};

// Requisição dos dados, transformação em json, buscando os detalhes, realizando a promisse com mais requisições
pokeapi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((Response) => Response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeapi.getPokemonsDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((PokemonsDetail) => PokemonsDetail)
};