const information = ["avatar_url", "bio", "blog", "company", "created_at", "email", "events_url", "followers", "followers_url", "following", "following_url", "gists_url", "gravatar_id", "hireable", "html_url", "id", "location", "login", "name", "node_id", "organizations_url", "public_gists", "public_repos", "received_events_url", "repos_url", "site_admin", "starred_url", "subscriptions_url", "twitter_username", "type", "updated_at", "url"];
let profilContainer = document.querySelector('.compteEsd-profil')
let followersCOntainer = document.querySelector('.compteEsd-Followers')

async function getDataUser(profil){
    return await fetch(`https://api.github.com/users/${profil}`)
        .then(response=>response.json())
        .then(data=>{
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

creerDicoInformation('esdlyonb1').then(data=>{
    const infoEsd = data
    profilContainer.innerHTML+=`
    <div id="follower" class=" d-flex  align-items-center "><img src="${infoEsd['avatar_url']}" width="170px" height="170px" alt=""><h1>${infoEsd['login']}</h1></div>
    `
    fetch('https://api.github.com/users/esdlyonb1/followers')
        .then(response=>response.json())
        .then(data=>{
            const followers = data
            followers.forEach((follow)=>{
                followersCOntainer.innerHTML+=`
            <div id="follower" class="d-flex mt-3 mb-3 py-4  align-items-center justify-content-around bg-simplet brd-23"><img src="${follow['avatar_url']}" width="170px" height="170px" alt=""><span>${follow['login']}</span><span><a href="${follow['html_url']}">${follow['id']}</a></span></div>
            
            `
                
                
            })
           



        })
})
