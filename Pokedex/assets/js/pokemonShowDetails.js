const loadMoreDetails = document.getElementById("pokemonShowDetails");
loadMoreDetails.addEventListener('click', () => {

  pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) =>
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
});
