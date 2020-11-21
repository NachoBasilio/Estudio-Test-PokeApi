const url = 'https://pokeapi.co/api/v2/pokemon/'
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
let numeroPokemon = 1
function escojePokemon(){
    let N = prompt("Escribe el numero de pokemon")
    numeroPokemon = N
    fetch(url+numeroPokemon+"/" )
.then(response => response.json())
.then(data => {
    console.log(data)
    let nombrePokemon = document.getElementById('Container_name')
    nombrePokemon.innerHTML = `<h1>${capitalize(data.name)}</h1>`
    let imgPokemon = document.getElementById('Container_img')
    imgPokemon.innerHTML = `<img src="${data.sprites.front_default}" alt="${capitalize(data.name)}">`
})
.catch(err=>console.log(err))
}

const boton = document.getElementById('boton')
boton.addEventListener('click', escojePokemon)
    



fetch(url+numeroPokemon+"/" )
.then(response => response.json())
.then(data => {
    console.log(data)
    let nombrePokemon = document.getElementById('Container_name')
    nombrePokemon.innerHTML = `<h1>${capitalize(data.name)}</h1>`
    let imgPokemon = document.getElementById('Container_img')
    imgPokemon.innerHTML = `<img src="${data.sprites.front_default}" alt="${capitalize(data.name)}">`
})
.catch(err=>console.log(err))