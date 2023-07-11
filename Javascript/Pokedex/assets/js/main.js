const noHTML = document.getElementById("listPokemon");
const noHtmlPokemonDetails = document.getElementById("pokemonShowDetails");
const loadMoreButton = document.getElementById("loadMoreButton");


const limit = 3;
let offset = 0;
const maxRecords = 151;

// Enviado para o html com o dom
function loadPokemonItens(offset, limit) {
  pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
    console.log(pokemons)
    const newHtml = pokemons
      .map(
        (pokemon) =>
          `<li class="pokemon ${pokemon.type}" id="pokemonShowDetails" data-pokemon-id="${pokemon.number}">
                         <span class="number" >#${pokemon.number}</span>
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


    const numberSpans = document.querySelectorAll('.pokemon');
    // Adicionando o evento de clique para cada elemento com a classe "number"

    numberSpans.forEach((li) => {
      li.addEventListener('click', async () => {
        const pokemonId = parseInt(li.getAttribute('data-pokemon-id'));
        console.log(pokemonId);
        loadMoreDetails(pokemonId)
      });
    });
  });
}

loadPokemonItens(offset, limit);

//Botão de paginação
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


async function pokeShowDetailsId(pokemonId) {
  // Faça algo com o ID do Pokémon aqui
  console.log(pokemonId);

}


function loadMoreDetails(id) {
  console.log(` O id chegou aqui ${id}`);

  pokeapiShowDetails.getPokemons(id)
    .then((pokemon) => {
      const newHtml = () => {
        return `
        <div class="${pokemon.type}">
        <div class="icons">
          <i class="fa-solid fa-arrow-left fa-lg"></i>
          <i class="fa-regular fa-heart fa-lg"></i>
        </div>

          <div class="title">
              <h1>${pokemon.name}</h1>
              <li class="number">${pokemon.id}</li>
              <div class="head">
                  <ol class="types">
                      ${pokemon.types.map((type) =>
          `
                        <li class="type ${type}">${type}</li>

                      `
        ).join(" ")} 
                  </ol>
              </div>

          </div>

            <div class="img">
              <img src="${pokemon.photo}" alt="">
            </div>

          <div class="contentBody">
              <div class="contentHead">
                  <ol class="sets">
                      <li>about</li>
                      <li>Base Stats</li>
                      <li>Evolutinos</li>
                      <li>Moves</li>
                  </ol>
              </div>

              <div class="statsPokemons">
                  <div class="species">
                      <h3>Species</h3>
                      <p>${pokemon.specie}</p>
                  </div>

                  <div class="species">
                      <h3>Height</h3>
                      <p>${pokemon.height} Cm</p>
                  </div>
                  <div class="species">
                      <h3>Weight</h3>
                      <p>${pokemon.weight} Kg</p>
                  </div>
                  <div class="species">
                      <h3>abilites</h3>
                      <p>${pokemon.abilities}</p>
                  </div>

                  <div class="breading">
                      <h3>Breading</h3>

                      <div class="breadings">
                          <h4 class="gender">Gender</h4>
                          <p><span class="genderPorcetagem">76%</span> 32%</p>
                      </div>

                      <div class="breadings">
                          <h4>Egg Grouds</h4>
                          ${pokemon.eggGrounds.map((eggs) =>
          `
                         <p class="moster">${eggs}</p>`
        ).join(" ")}
        
                          
                      </div>

                      <div class="breadings">
                          <h4>Egg Clycle</h4>
                          <p class="grasss">Grass</p>
                      </div>

                  </div>
              </div>

          </div>
        </div>

        `

      }
      noHtmlPokemonDetails.innerHTML = newHtml();
    });
}


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

// function convertPokemonTypesToLi(pokemonTypes) {
//   return pokemonTypes.map((typeSlot) => ` <li class="type">${typeSlot.type.name}</li>`)
// }
