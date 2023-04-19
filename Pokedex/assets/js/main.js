
function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => ` <li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
  return `<li class="pokemon">
                    <span class="number">#${pokemon.order}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${convertPokemonTypesToLi(pokemon.types).join("")}
                        </ol>
                        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                    </div>
                </li>`;
}

const noHTML = document.getElementById("listPokemon");

pokeapi.getPokemons().then((pokemons = []) => {
  noHTML.innerHTML += pokemons.map(convertPokemonToLi).join("");

  // UTILIZANDO O MAP ----
  // const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))
  // const newHtml = newList.join("");
  // noHTML.innerHTML += newHtml;
  // console.log(newHtml)


  
  // Convertendo em uma lista e depois em HTML

  // const ListItens = [];
  // for (let i = 0; i < pokemons.length; i++) {
  //   const pokemon = pokemons[i];
  // ListItens.push(convertPokemonToLi(pokemon))
  // }
  //   noHtml.innerHTLML += ListItens



  // UTILIZANDO O FOR ---- MUITO MAIS VERBOSO

  // for (let i = 0; i < pokemons.length; i++) {
  //   const pokemon = pokemons[i];
  //   noHtml.innerHTLML += convertPokemonToLi(pokemon)
  // }
  // console.log(pokemon)
});
