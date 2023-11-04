let inputville = document.getElementById('nameVille')
let erreur = document.querySelector('.textErreur')

const villeNomElements = document.querySelector('.villeNom');
const villeCoordHoraireElements = document.querySelector('.villeCoordHoraire');
const villeTempElements = document.querySelector('.villeTemp');
const villeDescElements = document.querySelector('.villeDesc');
const villeCoordVentElements = document.querySelector('.villeCoordVent');
let villeSubject = ""

function ville(ville) {
    inputville.value = ville
    chargerDonnee(ville)
}
function inputdonne(){
    chargerDonnee(inputville.value)
}

window.addEventListener('DOMContentLoaded',()=>{
    villeNomElements.style.backgroundSize = 'cover'
    chargerDonnee('Lyon')
})

function chargeIcon(code) {
    fetch('https://www.weatherapi.com/docs/conditions.json')
        .then(response => response.json())
        .then(data => {
            data.item
        })
}
function windDIrection(val){
    let dico ={  N: "Nord",  S: "Sud",   E: "Est",   W: "Ouest" }
    return dico[val]
}
function descriptionTemps(val){
    if (val === "Partly cloudy") {
        villeNomElements.style.backgroundImage = 'url("../image/nuage.png")';
        return "Le ciel est partiellement nuageux, affichant un mélange de nuages et d'éclaircies.";
    }

    if (val === "Overcast") {
        villeNomElements.style.backgroundImage = 'url("../image/nuage.png")';
        return "Le ciel est couvert de nuages, créant une atmosphère sombre et uniforme.";
    }

    if (val === "Moderate rain") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")';
        return "Une pluie modérée tombe doucement du ciel, créant une ambiance apaisante et rafraîchissante.";
    }

    if (val === "Fog") {
        villeNomElements.style.backgroundImage = 'url("../image/brouillard.png")';
        return "Un épais brouillard enveloppe l'environnement, réduisant la visibilité.";
    }

    if (val === "Clear") {
        villeNomElements.style.backgroundImage = 'url("../image/soleil.png")';
        return "Le ciel est dégagé, sans nuages visibles.";
    }
    if (val === "Sunny") {
        villeNomElements.style.backgroundImage = 'url("../image/soleil.png")';
        return "Le temps est ensoleillé, avec un ciel dégagé et lumineux.";
    }

    if (val === "Cloudy") {
        villeNomElements.style.backgroundImage = 'url("../image/nuage.png")';
        return "Le ciel est nuageux.";
    }

    if (val === "Mist") {
        villeNomElements.style.backgroundImage = 'url("../image/brouillard.png")';
        return "Brouillard.";
    }

    if (val === "Patchy rain nearby") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")';
        return "Pluie sporadique à proximité.";
    }

    if (val === "Patchy snow nearby") {
        villeNomElements.style.backgroundImage = 'url("../image/neige.png")';
        return "Chutes de neige sporadiques à proximité.";
    }

    if (val === "Patchy sleet nearby") {
        villeNomElements.style.backgroundImage = 'url("../image/brouillard.png")'; // Vous pouvez ajuster l'image
        return "Présence de grésil sporadique à proximité.";
    }

    if (val === "Patchy freezing drizzle nearby") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")'; // Vous pouvez ajuster l'image
        return "Pluie verglaçante sporadique à proximité.";
    }

    if (val === "Thundery outbreaks in nearby") {
        villeNomElements.style.backgroundImage = 'url("../image/eclair.png")';
        return "Orages à proximité.";
    }

    if (val === "Blowing snow") {
        villeNomElements.style.backgroundImage = 'url("../image/neige.png")'; // Vous pouvez ajuster l'image
        return "Chutes de neige poudreuse.";
    }

    if (val === "Blizzard") {
        villeNomElements.style.backgroundImage = 'url("../image/neige.png")'; // Vous pouvez ajuster l'image
        return "Blizzard.";
    }

    if (val === "Freezing fog") {
        villeNomElements.style.backgroundImage = 'url("../image/brouillard.png")';
        return "Brouillard givrant.";
    }

    if (val === "Patchy light drizzle") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")'; // Vous pouvez ajuster l'image
        return "Légère bruine.";
    }

    if (val === "Light drizzle") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")'; // Vous pouvez ajuster l'image
        return "Bruine légère.";
    }

    if (val === "Freezing drizzle") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")'; // Vous pouvez ajuster l'image
        return "Bruine verglaçante.";
    }

    if (val === "Heavy freezing drizzle") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")'; // Vous pouvez ajuster l'image
        return "Bruine verglaçante intense.";
    }

    if (val === "Patchy light rain") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")'; // Vous pouvez ajuster l'image
        return "Légère pluie.";
    }

    if (val === "Light rain") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")';
        return "Pluie légère.";
    }

    if (val === "Heavy rain at times") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")';
        return "Pluie forte par moments.";
    }

    if (val === "Heavy rain") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")';
        return "Pluie forte.";
    }

    if (val === "Light freezing rain") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")'; // Vous pouvez ajuster l'image
        return "Légère pluie verglaçante.";
    }

    if (val === "Moderate or heavy freezing rain") {
        villeNomElements.style.backgroundImage = 'url("../image/pluie.png")'; // Vous pouvez ajuster l'image
        return "Pluie verglaçante modérée ou forte.";
    }

    if (val === "Light sleet") {
        villeNomElements.style.backgroundImage = 'url("../image/brouillard.png")'; // Vous pouvez ajuster l'image
        return "Grésil léger.";
    }

    if (val === "Moderate or heavy sleet") {
        villeNomElements.style.backgroundImage = 'url("../image/brouillard.png")'; // Vous pouvez ajuster l'image
        return "Grésil modéré ou fort.";
    }
    if (val === "Patchy light snow") {
        villeNomElements.style.backgroundImage = 'url("../image/neige.png")';
        return "Chutes de neige légères.";
    }

    if (val === "Light snow") {
        villeNomElements.style.backgroundImage = 'url("../image/neige.png")';
        return "Chutes de neige légères.";
    }

    if (val === "Patchy moderate snow") {
        villeNomElements.style.backgroundImage = 'url("../image/neige.png")';
        return "Chutes de neige modérées.";
    }

    if (val === "Moderate snow") {
        villeNomElements.style.backgroundImage = 'url("../image/neige.png")';
        return "Chutes de neige modérées.";
    }

    if (val === "Patchy heavy snow") {
        villeNomElements.style.backgroundImage = 'url("../image/neige.png")';
        return "Chutes de neige fortes.";
    }

    if (val === "Heavy snow") {
        villeNomElements.style.backgroundImage = 'url("../image/neige.png")';
        return "Chutes de neige fortes.";
    }

// Par défaut, si aucune correspondance n'est trouvée, vous pouvez utiliser une image par défaut
    villeNomElements.style.backgroundImage = 'url("../image/default.png")';

    return "Description non disponible pour cette condition météorologique."
    }

function chargerDonnee(ville) {

    villeNomElements.style.backgroundImage =  'Transparent'
    fetch(`http://api.weatherapi.com/v1/current.json?key=f41a114c17fc4874bb8145830230311&q=${ville}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Echec' + response.status)
            }
            return response.json()
        })
        .then(data => {
            erreur.innerHTML = ""
            const villeLocation = data.location
            const villeDesc = data.current.condition
            const villeTemp = data.current

            villeNomElements.innerHTML = `
               <div class="d-flex flex-column align-items-center ">
                  <h1 class="bg-prof p-2 br-20 tx-joyeux">${villeLocation.name}</h1>
                  <img src="http:${villeDesc.icon}" alt="" width="200px" height="200px" srcset="">
               </div>
               <div class="d-flex flex-column align-items-center ">
                  <psan><b>Region : </b>${villeLocation.region}</psan>
                     <psan><b>Pays : </b>${villeLocation.country}</psan>
                   
                     </div> `
            villeCoordHoraireElements.innerHTML = `
    <div class="d-flex flex-column align-items-start ">
               <psan><b>Time_zone : </b>${villeLocation.tz_id}</psan>
            <psan><b>Heure actuelle :</b>${villeLocation.localtime}</psan>
                <psan><b>Lattitude : </b>${villeLocation.lat}</psan>
            <psan><b>Longitude  : </b>${villeLocation.lon}</psan>
              </div> 
            `
            villeTempElements.innerHTML =  `
    <div class="d-flex flex-column align-items-start ">
               <psan><b>Dernière Maj : </b>${villeTemp.last_updated}</psan>
            <psan><b>Température : </b>${villeTemp.temp_c}°C  /  ${villeTemp.temp_f}°F</psan>
           </div> 
            `
            villeDescElements.innerHTML =`
    <div class="d-flex flex-column align-items-start ">
         <psan>${descriptionTemps(villeDesc.text)}</psan>
       </div> 
            `
            villeCoordVentElements.innerHTML  =`
    <div class="d-flex flex-column align-items-start ">
            <psan><b>Vitesse du vent : </b>${villeTemp.wind_kph}km/h</psan>
            <psan><b>Direction du vent : </b>${windDIrection(villeTemp.wind_dir)}</psan>
            <psan><b>Humidité : </b>${villeTemp.wind_kph}km/h</psan>
            <psan><b>Pression  : </b>${villeTemp.pressure_mb}milibars</psan> 
            <psan><b>Précipitation  : </b>${villeTemp.precip_mm} milimète</psan> 
                  
       </div> 
            `
        })

        .catch(error => {
            console.log(error)
            erreur.innerHTML = "Oh là là , il semble que s'être glissée une petite erreur dans le nom que vous avez saisi !r ! "
            setTimeout(() => {
                erreur.innerHTML = ""
            }, 5000)
        })

}



