let inputville = document.getElementById('nameVille')
let erreur = document.querySelector('.textErreur')

const villeNomElements = document.querySelector('.villeNom');
const villeCoordHoraireElements = document.querySelector('.villeCoordHoraire');
const villeTempElements = document.querySelector('.villeTemp');
const villeDescElements = document.querySelector('.villeDesc');
const villeCoordVentElements = document.querySelector('.villeCoordVent');

function ville(ville) {
    inputville.value = ville
    inputville.ariaPlaceholder = ville
}



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
    if (val === "Partly cloudy" ){return  "Le ciel est partiellement nuageux, affichant un mélange de nuages et d'éclaircies."}
    if (val === "Overcast" ){return  "Le ciel est couvert de nuages, créant une atmosphère sombre et uniforme."}
    if (val === "Moderate rain" ){return "Une pluie modérée tombe doucement du ciel, créant une ambiance apaisante et rafraîchissante."}
    if (val === "Fog" ){return  "Un épais brouillard enveloppe l'environnement, réduisant la visibilité. "}
    if (val === "Clear" ){return  "Le ciel est dégagé, sans nuages visibles."}
    if (val === "Sunny" ){return "Le temps est ensoleillé, avec un ciel dégagé et lumineux."}
    if (val === "Moderate rain" ){return "Le ciel est dégagé, sans nuages visibles."}
    if (val === "Moderate or heavy rain in area with thunder" ){return  "Pluie modérée ou forte avec des éclairs dans la région."}
    if (val === "Ice pellets"){return "Présence de grésil."}
    if (val === "Light rain shower"){return "Légères averses de pluie."}
    if (val === "Torrential rain shower"){return "Averses de pluie torrentielles."}
    if (val === "Light sleet showers"){return "Légères averses de grésil."}
    if (val === "Light snow showers"){return "Légères averses de neige."}
    if (val === "Moderate or heavy snow showers"){return "Averses de neige modérées ou fortes."}
    if (val === "Light showers of ice pellets"){return "Légères averses de grêlons."}
    if (val === "Moderate or heavy showers of ice pellets"){return "Averses de grêlons modérées ou fortes."}
    if (val === "Patchy light rain in area with thunder"){return "Pluie légère dans la région avec des éclairs."}
    if (val === "Moderate or heavy rain in area with thunder"){return "Pluie modérée ou forte dans la région avec des éclairs."}
    if (val === "Patchy light snow in area with thunder"){return "Chutes de neige légères dans la région avec des éclairs."}
    if (val === "Moderate or heavy snow in area with thunder"){return "Chutes de neige modérées ou fortes dans la région avec des éclairs."}
    if (val === "Sunny"){return "Le temps est ensoleillé, avec un ciel dégagé et lumineux."}
    if (val === "Cloudy"){return "Le ciel est nuageux."}
    if (val === "Mist"){return "Brouillard."}
    if (val === "Patchy rain nearby"){return "Pluie sporadique à proximité."}
    if (val === "Patchy snow nearby"){return "Chutes de neige sporadiques à proximité."}
    if (val === "Patchy sleet nearby"){return "Présence de grésil sporadique à proximité."}
    if (val === "Patchy freezing drizzle nearby"){return "Pluie verglaçante sporadique à proximité."}
    if (val === "Thundery outbreaks in nearby"){return "Orages à proximité."}
    if (val === "Blowing snow"){return "Chutes de neige poudreuse."}
    if (val === "Blizzard"){return "Blizzard."}
    if (val === "Freezing fog"){return "Brouillard givrant."}
    if (val === "Patchy light drizzle"){return "Légère bruine."}
    if (val === "Light drizzle"){return "Bruine légère."}
    if (val === "Freezing drizzle"){return "Bruine verglaçante."}
    if (val === "Heavy freezing drizzle"){return "Bruine verglaçante intense."}
    if (val === "Patchy light rain"){return "Légère pluie."}
    if (val === "Light rain"){return "Pluie légère."}
    if (val === "Heavy rain at times"){return "Pluie forte par moments."}
    if (val === "Heavy rain"){return "Pluie forte."}
    if (val === "Light freezing rain"){return "Légère pluie verglaçante."}
    if (val === "Moderate or heavy freezing rain"){return "Pluie verglaçante modérée ou forte."}
    if (val === "Light sleet"){return "Grésil léger."}
    if (val === "Moderate or heavy sleet"){return "Grésil modéré ou fort."}
    if (val === "Patchy light snow"){return "Chutes de neige légères."}
    if (val === "Light snow"){return "Chutes de neige légères."}
    if (val === "Patchy moderate snow"){return "Chutes de neige modérées."}
    if (val === "Moderate snow"){return "Chutes de neige modérées."}
    if (val === "Patchy heavy snow"){return "Chutes de neige fortes."}
    if (val === "Heavy snow"){return "Chutes de neige fortes."}
    return "Description non disponible pour cette condition météorologique."
    }

function chargerDonnee() {
    let ville = inputville.value

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
                  <h1>${villeLocation.name}</h1>
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
         <psan>${villeDesc.text}${descriptionTemps(villeDesc.text)}</psan>
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



