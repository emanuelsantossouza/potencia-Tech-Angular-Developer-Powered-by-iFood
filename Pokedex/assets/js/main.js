console.log("sucesso");

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

let noHTML = document.getElementById("listPokemon")



function convertPokemonToLi(pokemon) {
  return `<li class="pokemon">
                    <span class="number">#001</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            <li class="type">Grass</li>
                            <li class="type">Poison</li>
                        </ol>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                            alt="${pokemon.name}">
                    </div>
                </li>`;
}

fetch(url)
  .then((Response) => Response.json())
  .then((ResponseBody) => ResponseBody.results)
  .then((PokemonList) => {
    for (let i = 0; i < PokemonList.length; i++) {
        const pokemon = PokemonList[i];
        console.log(convertPokemonToLi(pokemon));
        noHTML.innerHTML += convertPokemonToLi(pokemon);
    }
  });
