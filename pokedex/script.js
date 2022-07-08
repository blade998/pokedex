const pokemonContainer = document.querySelector('.pokemon-container')

function fethpokemon(id){
    fetch( "https://pokeapi.co/api/v2/pokemon/"+id)
    .then(res =>res.json())
    .then(data => {
      creatpokemon(data)
    })
    .catch(err => alert("deu pau o codigo"))
    
}
function fethpokemons(number){
   for(let i = 1;i <= number;i++){
     fethpokemon(i)
   }
}

function creatpokemon(pokemon){
   const card = document.createElement('div');  
   card.classList.add('pokemon-block')

   const spritecontainer = document.createElement('div')
   spritecontainer.classList.add('img-container')

   const sprite = document.createElement('img')
   sprite.src = pokemon.sprites.front_default

   spritecontainer.appendChild(sprite)

   const number = document.createElement("p")
   number.textContent = "#"+pokemon.id.toString().padStart()+" "

   const name = document.createElement('p');
   name.classList.add('name')
   name.textContent = pokemon.name

   card.appendChild(spritecontainer)
   card.appendChild(number)
   card.appendChild(name)

   pokemonContainer.appendChild(card)}
   

fethpokemons(150)

