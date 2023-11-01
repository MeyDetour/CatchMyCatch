// fichier qui gere les couleurs et le menu sur chaque page

//menu
let navbarMain = document.querySelector('.navbarMain')

navbarMain.innerHTML = `

    <nav id="menuNavbar" class=" ps-abs top-0 left-0 p-rel">
        <div class='navbarResponsiv w-100 flex-row align-items-center justify-content-end p-abs top-0 left-0  '>

            <div onclick="ouvrirMenu()" class="burger-container d-block m-2 centered ">
                <div class="d-flex flex-column h-90 w-80 align-items-center justify-content-evenly w-100 br-30  fondburger">
                    <div class="steak bg-atchoum h-6 w-69 br-10"></div>
                    <div class="steak bg-atchoum h-6 w-69 br-10"></div>
                    <div class="steak bg-atchoum h-6 w-69 br-10"></div>
                </div>

            </div>
        </div>
    <div class="lien-container h-60  p-3 w-100 br-60  justify-content-evenly align-items-center ">
     
  <div class="menu-fond w6a0be57d-100 h-18 br-30 centered entrance-left "><a href="githubMey.html"
                    class="lien-menu fsz-1">Mon profil Github</a></div>
            <div class="menu-fond w-100 h-18 br-30 centered entrance-right"><a href="githubClasse.html"
                    class="lien-menu fsz-1">Autre profil</a></div>
            <div class="menu-fond w-100 h-18 br-30 centered entrance-left"><a href="chuckNoris.html"
                    class="lien-menu fsz-1">Chuck Noris</a></div>
            <div class="menu-fond w-100 h-18 br-30 centered entrance-right"><a href="donneeDivers.html"
                    class="lien-menu fsz-1">Météo</a></div>
            <div class="menu-fond w-100 h-18 br-30 centered entrance-left"><a href="pokedex.html"
                    class="lien-menu fsz-1">Pokedex</a></div>
       </div>
       
        <div class="menuResponsive bg-timide">
            <i id='iconeBack' onclick="fermerMenu()" class="bi bi-arrow-return-left  m-2 tx-grincheux d-block "></i>
     <div class="lien-container2 h-60  p-3 w-100 br-60  justify-content-evenly align-items-center ">
     
  <div class="menu-fond w6a0be57d-100 h-18 br-30 centered entrance-left "><a href="githubMey.html"
                    class="lien-menu fsz-1">Mon profil Github</a></div>
            <div class="menu-fond w-100 h-18 br-30 centered entrance-right"><a href="githubClasse.html"
                    class="lien-menu fsz-1">Autre profil</a></div>
            <div class="menu-fond w-100 h-18 br-30 centered entrance-left"><a href="chuckNoris.html"
                    class="lien-menu fsz-1">Chuck Noris</a></div>
            <div class="menu-fond w-100 h-18 br-30 centered entrance-right"><a href="donneeDivers.html"
                    class="lien-menu fsz-1">Météo</a></div>
            <div class="menu-fond w-100 h-18 br-30 centered entrance-left"><a href="pokedex.html"
                    class="lien-menu fsz-1">Pokedex</a></div>
       </div>
        </div>
    </nav>
`
let liens = document.querySelector('.lien-container2')
let fond = document.querySelector('.fond')
let burger = document.querySelector('.burger-container')
let menu = document.querySelector('.menuResponsive')

let iconeRetour = document.getElementById('iconeBack')

function ouvrirMenu() {
    toggleMenu()
}

function fermerMenu() {
    toggleMenu()
}

function toggleMenu() {
    burger.classList.toggle('d-block')
    menu.classList.toggle('ouvert')
liens.classList.toggle('d-flex')
    iconeRetour.classList.toggle('fs-1')
    fond.classList.toggle('d-none')

}

window.addEventListener("resize", () => {
    if (menu.classList.contains('ouvert')) {
        fermerMenu()
    }


})


//===========================================Palette de couleur et raccourcis
//Ma palette de couleur perso se trouve dans style.css


const colors = [
    'falseColor',
    'prof',
    'dash',
    'grincheux',
    'goodColor',
    'violet1',
    'joyeux',
    'simplet',
    'timide',
    'dormeur',
    'atchoum'
];

const root = document.documentElement

function addStyle(nameClass, attributs) {
    const styleElement = document.createElement('style')
    document.head.appendChild(styleElement)
    styleElement.sheet.insertRule(`${nameClass}{${attributs}}`)
}


//creer nos differentes variable qu'on va ajouter tx-color bg-color brd-color
colors.forEach(color => {
    addStyle(`.tx-${color}`, `color : var(--${color})`)
    addStyle(`.bg-${color}`, `background-color : var(--${color})`)
    addStyle(`.brd-${color}`, `border : var(--${color}) 2px solid`)
})

//fonction addStyle creer un element style et l'insert dans la balise head et ajoute l'element de style personnaliser


//Pareil pour les pourcentages
const pourcentages = [...Array(101).keys()]

pourcentages.forEach(pourcentage => {
    addStyle(`.h-${pourcentage}`, `height: ${pourcentage}%;`);
    addStyle(`.top-${pourcentage}`, `top: ${pourcentage}%;`);
    addStyle(`.left-${pourcentage}`, `left: ${pourcentage}%;`);
    addStyle(`.btm-${pourcentage}`, `bottom: ${pourcentage}%;`);
    addStyle(`.right-${pourcentage}`, `right: ${pourcentage}%;`);
    addStyle(`.br-${pourcentage}`, `border-radius: ${pourcentage}px;`);
    addStyle(`.w-${pourcentage}`, `width: ${pourcentage}%;`);
    addStyle(`.fsz-${pourcentage}`, `font-size: ${pourcentage}em;`);

})