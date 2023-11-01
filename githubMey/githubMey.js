
const information = ["avatar_url", "bio", "blog", "company", "created_at", "email", "events_url", "followers", "followers_url", "following", "following_url", "gists_url", "gravatar_id", "hireable", "html_url", "id", "location", "login", "name", "node_id", "organizations_url", "public_gists", "public_repos", "received_events_url", "repos_url", "site_admin", "starred_url", "subscriptions_url", "twitter_username", "type", "updated_at", "url"];
let avatarContainer = document.querySelector('.profilGithubAvatar');
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
function dicoInformation(nomgithub){
    let dico = {}
    dataProfilGithub(nomgithub).then(data => {
        information.forEach((info)=>{
            dico[info]= data[info]
        })
    })
    return dico
}
console.log(dicoInformation('MeyDetour'))



