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

    setPokemonInfo(data);

  } catch(err) {
    alert("Pokémon not found");
    console.log(err);
  }
};

const setPokemonInfo = data => {
  const {name, id, weight, height, types, sprites, stats} = data; // this is how you destructure the object

  PokemonName.textContent = `${name[0].toUpperCase() + name.slice(1)}`;
  PokemonID.textContent = `#${id}`;
  PokemonWeight.textContent = `${weight}`;
  PokemonHeight.textContent = `${height}`;

  PokemonHealth.textContent = stats[0].base_stat;
  PokemonAttack.textContent = stats[1].base_stat;
  PokemonDefense.textContent = stats[2].base_stat;
  PokemonSpecialAttack.textContent = stats[3].base_stat;
  PokemonSpecialDefence.textContent = stats[4].base_stat;
  PokemonSpeed.textContent = stats[5].base_stat;

  // Sprite
  PokemonSprite.innerHTML = `<img id="sprite" src="${sprites.front_default}" alt="${name}">`;

  // Types
  PokemonTypes.innerHTML = types.map(obj =>
    ` 
    <span>${obj.type.name[0].toUpperCase() + obj.type.name.slice(1)}</span>
    `
  ).join(" ");
  
};

// Our Event Listeners
SearchButton.addEventListener("click", e => {
  e.preventDefault();
  fetchData();
});
