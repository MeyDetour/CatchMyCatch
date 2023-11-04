const pokemonNomDiv = document.querySelector(".pokemonNom");
const pokemonEvolutionDiv = document.querySelector(".pokemonEvolution");
const text = document.getElementById('namePokemon')

function envoyerNome(){
    generatePokemon(text.value)
}

window.addEventListener('DOMContentLoaded',()=>{
    const nomPokemon = 'pikachu'
    generatePokemon(nomPokemon)
})


function evolution(data, name, id) {
    const chaineEvo = document.querySelector('.chaineEvolution')
    pokemonEvolutionDiv.innerHTML = ''
    chaineEvo.innerHTML = ''

    let megaEvo = 0
    let response = {
        'suite': [],
        'megaEvo': []
    }
    let pre = data.pre
    let mega = data.mega
    let next = data.next


    if (pre !== null) {
        for (const elt of pre) {
            console.log(elt)
            chaineEvo.innerHTML += `<div class="d-flex flex-column align-items-center"><img width="200px" height="200px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${elt.pokedexId}.png" alt=""><spand>${elt.name}</spand></div> => `
        }
    }
    chaineEvo.innerHTML += `<div class="d-flex flex-column align-items-center"><img width="200px" height="200px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt=""><spand>${name}</spand></div>`

    if (next !== null) {
        console.log(next)
        for (const elt of next) {
            chaineEvo.innerHTML += ` => <div class="d-flex flex-column align-items-center"><img width="200px" height="200px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${elt.pokedexId}.png" alt=""><spand>${elt.name}</spand></div>`
        }
    }

    if (mega !== null) {
        pokemonEvolutionDiv.innerHTML += '<div class="d-flex flex-column flex-wrap"> <h5>Orbe pour MegaEvolution : </h5><div class="obrePokemon d-flex flex-column flex-wrap"> </div></div>'
        let orbeElt = document.querySelector('.obrePokemon')
        for (const elt of mega) {
            orbeElt.innerHTML += `<span class="me-5">${elt.orbe}</span>  `
        }
    }

}

function generatePokemon(nom) {
    fetch(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${nom}`)
        .then(response => response.json())
        .then(pokemonData => {
            console.log(pokemonData)

            pokemonNomDiv.innerHTML = `
                <div class="d-flex flex-column  align-items-start">
                <div class="d-flex flex-column"><h1>${pokemonData.name.fr} </h1><h3>${pokemonData.name.en} </h3><h3>${pokemonData.name.jp} </h3></div>     
                <br> <span><b>Pokedex Id</b> :  ${pokemonData.pokedexId}</span>
                <span><b>Generation</b> :  ${pokemonData.generation}</span>
                <span><b>Catégorie</b> :  ${pokemonData.category}</span>
                <span><b>Type</b> :  ${pokemonData.types.name}</span>
                <span><b>HP </b> :  ${pokemonData.stats.hp}</span>
                <span><b>Taille</b> :  ${pokemonData.height}</span>
                <span><b>Poids </b> :  ${pokemonData.weight}</span>
                </div>
                `
            document.getElementById('imagePokemon').innerHTML = `
                <img width="300px" height="300px" src="https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/${pokemonData.pokedexId}/regular.png" alt="" srcset="">
                <div class="m-2 d-flex flex-column flex-wrap" style="height: 300px">
                <img class="imgMini" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonData.pokedexId}.png" alt="" srcset="">
                <img class="imgMini" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/${pokemonData.pokedexId}.png" alt="">
                <img class="imgMini" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemonData.pokedexId}.png" alt="">
                <img class="imgMini" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/${pokemonData.pokedexId}.png" alt="">
                <img class="imgMini" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.pokedexId}.png" alt="">
                <img class="imgMini" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${pokemonData.pokedexId}.png" alt="">
                <img class="imgMini" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonData.pokedexId}.png" alt="">
                <img class="imgMini" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${pokemonData.pokedexId}.png" alt="">            
                </div>
                `
            evolution(pokemonData.evolution, nom, pokemonData.pokedexId)

        })

}