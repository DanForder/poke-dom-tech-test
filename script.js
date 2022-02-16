//imports
import pokemonArray from "./data/data.js";

// variables
const cardContainer = document.querySelector(".card-container");

//functions
const capitaliseWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const getTypesHtml = (types) => {
  if (types.length === 1) {
    return types[0];
  }
  if (types.length === 2) {
    return `${types[0]} & ${types[1]}`;
  }
};

const getPokemonCards = () => {
  let cardsHtml = "";

  for (const pokemon of pokemonArray) {
    const pokemonHtml = `<div class="card">
	  <img
		class="card__image"
		src="${pokemon.sprite}"
		alt="${capitaliseWord(pokemon.name)}"
	  />
	  <div class="card__content">
		<h2 class="card__heading">${capitaliseWord(pokemon.name)}</h2>
		<p class="card__text">${capitaliseWord(pokemon.name)} (#${
      pokemon.id
    }) is a ${getTypesHtml(pokemon.types)} type pokemon.</p>
	  </div>
	</div>`;

    cardsHtml += pokemonHtml;
  }
  return cardsHtml;
};

// logic
cardContainer.innerHTML = getPokemonCards();
