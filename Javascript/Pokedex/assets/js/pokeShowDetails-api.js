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
  eggGrounds = [];
  eggClycle;
}

const pokeapiShowDetails = {};
pokeApiEggsGroup = {};

let eggs = [];


// Convertendo os dados da PokeApi para o dados do nosso models, deixando mais facies de utilizar no html
function convertPokemonDetailToPokemonShowDetailsModels(pokeDetail) {
  console.log(pokeDetail);
  pokeApiEggsGroup.getEggs(pokeDetail.species.url);



  const pokemonShowDetailsToHtml = new PokemonShowDetails();
  pokemonShowDetailsToHtml.name = pokeDetail.name;
  pokemonShowDetailsToHtml.id = pokeDetail.id;


  const types = pokeDetail.types.map((typeSlot) => (typeSlot.type.name));
  const [type] = types;
  console.log(type);

  pokemonShowDetailsToHtml.types = types;
  pokemonShowDetailsToHtml.type = type;



  pokemonShowDetailsToHtml.photo = pokeDetail.sprites.other.dream_world.front_default;
  pokemonShowDetailsToHtml.specie = pokeDetail.species.name;
  pokemonShowDetailsToHtml.height = pokeDetail.height;
  pokemonShowDetailsToHtml.weight = pokeDetail.weight;
  pokemonShowDetailsToHtml.abilities = pokeDetail.abilities.map(
    (abilityShow) => abilityShow.ability.name
  ).join(", ");

  let arrayEggs = [];

  eggs.map((egg) => arrayEggs = egg)

  arrayEggs.forEach((egg) => {
    console.log(egg)
    pokemonShowDetailsToHtml.eggGrounds.unshift(egg.name)
  })

  console.log(eggs);
  console.log(pokemonShowDetailsToHtml.eggGrounds)

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

pokeApiEggsGroup.getEggs = async (url) => {

  return await fetch(url)
    .then((results) => results.json())
    .then((jsonBody) => jsonBody.egg_groups)
    .then((egg) => eggs.unshift(egg));
}
// https://pokeapi.co/api/v2/pokemon-species/1
