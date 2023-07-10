const pokeapiShowDetails = {};
let pokemonJson;

class PokemonShowDetails {
  name;
  id;
  types = [];
  type;
  photo;
  specie;
  height;
  weight;
  abilities = [];
  gender;
  eggGrounds;
  eggClycle;
}



// Convertendo os dados da PokeApi para o dados do nosso models, deixando mais facies de utilizar no html
function convertPokemonDetailToPokemonShowDetailsModels(pokeDetail) {
  console.log(pokeDetail);


  const pokemonShowDetailsToHtml = new PokemonShowDetails();
  pokemonShowDetailsToHtml.name = pokeDetail.name;
  pokemonShowDetailsToHtml.id = pokeDetail.id;


  pokemonShowDetailsToHtml.photo = pokeDetail.sprites.other.dream_world.front_default;
  pokemonShowDetailsToHtml.specie = pokeDetail.species.name;
  pokemonShowDetailsToHtml.height = pokeDetail.height;
  pokemonShowDetailsToHtml.weight = pokeDetail.weight;
  pokemonShowDetailsToHtml.abilities = pokeDetail.abilities.map(
    (abilityShow) => abilityShow.ability.name
  ).join(", ");


  return pokemonShowDetailsToHtml;
}


// NÃO PRECISAMOS, POR QUE ELE JÁ RETORNA 1 UNICO POKEMON
//  pokeapiShowDetails.getPokemonsDetail = (pokemon) => {
//   return fetch(pokemon.url)
//      .then((reponse) => reponse.json())
//      .then(convertPokemonDetailToPokemonShowDetailsModels);
// };



// RETORNA 1 POKEMON COM O POKEMON ESCOLHIDO
pokeapiShowDetails.getPokemons = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => convertPokemonDetailToPokemonShowDetailsModels(jsonBody));
};


