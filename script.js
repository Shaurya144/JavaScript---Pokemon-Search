const SearchInput = document.getElementById("search-input");
const SearchButton = document.getElementById("search-button");

const PokemonName = document.getElementById("pokemon-name");
const PokemonID = document.getElementById("pokemon-id");
const PokemonWeight = document.getElementById("weight");
const PokemonHeight = document.getElementById("height");
const PokemonHealth = document.getElementById("hp");
const PokemonTypes = document.getElementById("types");
const PokemonSpeed = document.getElementById("speed");
const PokemonAttack = document.getElementById("attack");
const PokemonDefense = document.getElementById("defense");
const PokemonSpecialAttack = document.getElementById("special-attack");
const PokemonSpecialDefence = document.getElementById("special-defense");
const PokemonSprite = document.getElementById("sprite-container");


// similar to the forum searching leaderboard
const fetchData = async () => {
  try {
    const pokemonNameOrID = SearchInput.value.toLowerCase();
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrID}`);
    const data = await res.json();

  } catch(err) {
    alert("Pokemon not found")
    console.log(err)
  }
}
