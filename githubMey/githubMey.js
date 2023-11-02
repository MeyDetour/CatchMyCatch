const information = ["avatar_url", "bio", "blog", "company", "created_at", "email", "events_url", "followers", "followers_url", "following", "following_url", "gists_url", "gravatar_id", "hireable", "html_url", "id", "location", "login", "name", "node_id", "organizations_url", "public_gists", "public_repos", "received_events_url", "repos_url", "site_admin", "starred_url", "subscriptions_url", "twitter_username", "type", "updated_at", "url"];
let nomContainer = document.querySelector('.profilGithubNom');
let bioContainer = document.querySelector('.profilGithubBio');
let idContainer = document.querySelector('.profilGithubId');
let dateContainer = document.querySelector('.profilGithubDate');
let depotContainer = document.querySelector('.profilGithubDepot');
let amiContainer = document.querySelector('.liste-ami-scroll-container');


async function getDataUser(nomGithub) {
//parametre : nom d'un profil github (string) Renvoie le fichier json deserialise
    return await fetch(`https://api.github.com/users/${nomGithub}`)
        .then(response => response.json())
        .then(data => {
            return data
        })
}
async function creerDicoInformation(nomgithub) {
    //parametre : nom d'un profil github et renvoie un dictionnaire {information : valeur }
    let dico = {}
    const dataProfil = await getDataUser(nomgithub)
    information.forEach((info) => {
        dico[info] = dataProfil[info]
    })
    return dico
}
function transformerDate(date){
    // converti une date str en date formate (fais avec chatgpt)
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const formattedDate = new Date(date).toLocaleString('fr-FR', options);
return formattedDate
}

async function getData(lien){
    return await fetch(lien)
        .then(response=>response.json())
        .then(data =>{
            return data
            }
        )
}


//remplissage des donnees du fichier githubMey.html
creerDicoInformation('MeyDetour').then(data => {
    const infoMey = data
    document.getElementById('imageMey').src = infoMey['avatar_url']
    nomContainer.innerHTML += `<div class="d-flex flex-column "><h1 class="tx-violet1">${infoMey['name']}</h1><h4><b>Login : </b>${infoMey['login']}</h4><span><b>Following :</b> ${infoMey['following']}</span><span><b>Followers :</b>${infoMey['followers']}</span></div>`
    bioContainer.innerHTML +=` <div class="d-flex flex-column "><p class="text-bio">${infoMey['bio']}</p></div>`
    idContainer.innerHTML+=` <div class="d-flex flex-column "><span><b>id profil : </b>${infoMey['id']}</span><a href="${infoMey['html_url']}"  class="tx-joyeux">Regarde mon profil !</a><span><b>Type d'utilisateur :</b> ${infoMey['type']}</span><span><b>Localisation :</b> ${infoMey['location']}</span></div>`
    dateContainer.innerHTML +=` <div class="d-flex flex-column "><span><b>Date de creation du compte: </b>${transformerDate(infoMey['created_at'])}</span><span><b>Derniere profil MAJ :</b> ${transformerDate(infoMey['updated_at'])}</span></div>`
    depotContainer.innerHTML += `<div><b>Nombre de depot public :</b>${infoMey['public_repos']}</div>`
    getData(infoMey['repos_url']).then(data =>{
        const depots = data
        depots.forEach(depot=>{
            depotContainer.innerHTML +=
                `
       <div class="scroll-div-repo">
       <span><b>Name : </b>${depot['name']}</span>
       <div class="barre-between"></div>
       <span><b>id : </b>${depot['id']}</span>
       <div class="barre-between"></div>
       <a href="${depot['homepahe']}">lien du depot</a>
       <div class="barre-between"></div>
       <span><b>Proprietraire : </b>${depot['owner']['login']}</span>
       <div class="barre-between"></div>
       <span><b>Dernier Update : </b>${transformerDate(depot['updated_at'])}</span>
       <div class="barre-between"></div>
       <span><b>Visibilité : </b>${depot['visibility']}</span>
    `

        })
    })
    getData('https://api.github.com/users/MeyDetour/following').then(data=>{
        const follows = data
        follows.forEach((follow)=>{
            amiContainer.innerHTML+=`
            <div class="scroll-ami-profil br-20"><img src="${follow['avatar_url']}" width="60px" height="60px" alt=""><h5>${follow['login']}</h5></div>
            `
        })
        }
    )



})

