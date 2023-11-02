let categorieCOntainer = document.querySelector('.boutonCategorie')
let text = document.querySelector('.typewriter')
let boutonRandom = document.querySelector('.bouton')


boutonRandom.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            text.innerHTML = ` <h5 class="textJoke">${data.value}</h5>`
        })
})


fetch('https://api.chucknorris.io/jokes/categories')
    .then(response => response.json())
    .then(data => {
        data.forEach((cat) => {

            categorieCOntainer.innerHTML += `<button class="bouton boutonCAT" id="${cat}">${cat}</button>`
        })

        const boutons = document.querySelectorAll('.boutonCAT')

        boutons.forEach((boutonUneCategorie) => {
            boutonUneCategorie.addEventListener('click', () => {
                let cat = boutonUneCategorie.id
                console.log(cat)
                fetch(`https://api.chucknorris.io/jokes/random?category=${cat}`)
                    .then(response => response.json())
                    .then(data => {
                        text.innerHTML = ` <h5 class="textJoke">${data.value}</h5>`
                    })


            })
        })


    })