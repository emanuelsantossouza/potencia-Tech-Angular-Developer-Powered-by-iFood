// function convertPokemonTypesToLi(pokemonTypes) {
//   return pokemonTypes.map((typeSlot) => ` <li class="type">${typeSlot.type.name}</li>`)
// }

const noHTML = document.getElementById("listPokemon");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 10;
let offset = 0;
const maxRecords = 151;

// function convertPokemonToLi(pokemon) {
//   return `<li class="pokemon ${pokemon.type}">
//                     <span class="number">#${pokemon.number}</span>
//                     <span class="name">${pokemon.name}</span>

//                     <div class="detail">
//                         <ol class="types">
//                             ${pokemon.types
//                               .map(
//                                 (type) =>
//                                   `<li class="type ${type}">${type}</li>`
//                               )
//                               .join("")}
//                         </ol>
//                         <img src="${pokemon.photo}" alt="${pokemon.name}">
//                     </div>
//                 </li>`;
// }

// pokeapi.getPokemons().then((pokemons = []) => {
//   noHTML.innerHTML += pokemons.map(convertPokemonToLi).join("");

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
// });



function pokemonShowDetails() {}

function loadPokeonItens(offset, limit) {
  pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) =>
          `<li class="pokemon ${pokemon.type}" id="pokemonShowDetails">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>

                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types
                                  .map(
                                    (type) =>
                                      `<li class="type ${type}">${type}</li>`
                                  )
                                  .join("")}
                            </ol>
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                    </li>`
      )
      .join("");
    noHTML.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;

  const qtdRecord = offset + limit;

  if (qtdRecord >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
