const searchUser = document.getElementById('searchUser')
const searchButton = document.getElementById('searchButton')
const userId = document.getElementById('userId')
const userImg = document.getElementById('userImg')
const repos = document.getElementById('repos')
const foundContainer = document.querySelector('.found-container')
// FETCH GITHUB REPOS API

async function getUser(name) {
    let response = await fetch(`https://api.github.com/users/${name}/repos?client_id=
    e40d040fd6b2a0c78da5`);
    let data = await response.json()
    return data;
}

// CLICK EVENT LISTENER TO THE BUTTON TO SHOW USER INFORMATION

searchButton.addEventListener('click', function(e) {
    repos.innerHTML = null;
    getUser(`${searchUser.value}`)
    .then(data => {
        userImg.src = `${data[0].owner.avatar_url}`
        userId.textContent = `${data[0].owner.login}`
        data.forEach(repo => {
            let li = document.createElement("li")
            li.className = "list-item"
            li.innerHTML = `<a target="_blank" href="${repo.html_url}">${repo.name}</a>`
            repos.append(li)
        })
    })
    .catch(err => console.log(err));
    searchUser.value = null;

    foundContainer.classList.remove('hidden')
    
    e.preventDefault();
})