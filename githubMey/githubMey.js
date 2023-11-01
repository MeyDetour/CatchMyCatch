const information = ["avatar_url", "bio", "blog", "company", "created_at", "email", "events_url", "followers", "followers_url", "following", "following_url", "gists_url", "gravatar_id", "hireable", "html_url", "id", "location", "login", "name", "node_id", "organizations_url", "public_gists", "public_repos", "received_events_url", "repos_url", "site_admin", "starred_url", "subscriptions_url", "twitter_username", "type", "updated_at", "url"];
let nomContainer = document.querySelector('.profilGithubNom');
let bioContainer = document.querySelector('.profilGithubBio');
let idContainer = document.querySelector('.profilGithubId');
let dateContainer = document.querySelector('.profilGithubDate');
let depotContainer = document.querySelector('.profilGithubDepot');
let amiContainer = document.querySelector('.profilGithubAmi');


async function dataProfilGithub(nomGithub) {

    return await fetch('https://api.github.com/users/MeyDetour')
        .then(response => response.json())
        .then(data => {
            return data
        })
}

async function dicoInformation(nomgithub) {
    let dico = {}
    const dataProfil = await dataProfilGithub(nomgithub)
    information.forEach((info) => {
        dico[info] = dataProfil[info]
    })
    return dico
}
function transformerDate(date){
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const formattedDate = new Date(date).toLocaleString('fr-FR', options);
return formattedDate
}

dicoInformation('MeyDetour').then(data => {

    const infoMey = data
    console.log(infoMey)
    document.getElementById('imageMey').src = infoMey['avatar_url']
    nomContainer.innerHTML += `
        <div class="d-flex flex-column ">
        <h1 class="tx-violet1">${infoMey['name']}</h1>
        <h4><b>Login : </b>${infoMey['login']}</h4>
        <span><b>Following :</b> <a class="tx-joyeux" href="${infoMey['following_url']}">${infoMey['following']}</a></span>
        <span><b>Followers :</b> <a class="tx-joyeux" href="${infoMey['followers_url']}">${infoMey['followers']}</a></span>
        </div>
       
        `
    bioContainer.innerHTML +=` <div class="d-flex flex-column "><p class="text-bio">${infoMey['bio']}</p></div>`
    idContainer.innerHTML+=` <div class="d-flex flex-column "><span><b>id profil : </b>${infoMey['id']}}</span><a href="${infoMey['html_url']}"  class="tx-joyeux">Regarde mon profil !</a><span><b>Type d'utilisateur :</b> ${infoMey['type']}</span><span><b>Localisation :</b> ${infoMey['location']}</span></div>`
    dateContainer.innerHTML +=` <div class="d-flex flex-column "><span><b>Date de creation du compte: </b>${transformerDate(infoMey['created_at'])}</span><span><b>Derniere MAJ :</b> ${transformerDate(infoMey['updated_at'])}</span></div>`

})

