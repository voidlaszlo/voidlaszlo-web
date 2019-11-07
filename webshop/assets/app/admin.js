class Admin {
    constructor() {

    this.users = []

    document.body.innerHTML = this.render()
    this.registerEventListeners()
    
    }

    clearInputs() {
        document.getElementById("name").value = ""
        document.getElementById("type").value = ""
        document.getElementById("whichGender").value = ""
        document.getElementById("price").value = ""
    }

    registerEventListeners() {
        let div = document.getElementById('addShoe')
        div.addEventListener('click', e => {
            if(e.target.id === "addShoe") {
                let shoe = new Shoe(
                    document.getElementById("name").value,
                    document.getElementById("type").value,
                    document.getElementById("whichGender").value,
                    parseInt(document.getElementById("price").value)
                )
                app.shoeContainer.shoes.push(shoe)
                app.shoeContainer.genIndex()
                this.clearInputs()
                this.populateShoes()
            }
        })

        let logoutBtn = document.getElementById('logoutBtn')
        logoutBtn.addEventListener('click', e => {
            app.getUser()
        })

        // SHOE POPULATE
        this.populateShoes()

        // USER POPULATE
        let adminUsers = document.getElementById('admin-users')
        adminUsers.innerHTML = `<h2><i class="fas fa-users"></i> Users</h2>`
        for(let user of app.users) {
            adminUsers.innerHTML +=
            `
            <div class="admin-users-item">
                <p key="${user.id}" onclick="alert('Email from ${user.username} is ${user.email}.')">${user.username}</p>
            </div>
            `
        }

    }

    populateShoes() {
        let adminShoes = document.getElementById('admin-shoes')
        adminShoes.innerHTML = `<h2><i class="fas fa-sitemap"></i> Shoes</h2>`
        for(let shoe of app.shoeContainer.shoes) {
            adminShoes.innerHTML += 
            `
            <div class="admin-shoes-item">
                <p key="${shoe.id}" class="shoe-item">${shoe.name}</p>
            </div>
            `
        }
        adminShoes.addEventListener('click', e => {
            if(e.target.className === "shoe-item") {
                if(window.confirm(`Do you want to delete ${e.target.innerText} ?`)) {
                    app.shoeContainer.shoes[e.target.attributes["key"].value].removeFromContainer()
                    app.shoeContainer.genIndex()
                    console.log(e.target.parentNode.remove())
                    
                    return                   
                } else {
                    console.log("not deleting")
                    return
                }
            }
        })
    }

    render() {
        return (
            `
        <div id="admin-ui">
            <div class="admin-top">
                <h1>Hi, <span>Admin</span></h1>
                <button id="logoutBtn">Logout</button>
            </div>
            <div id="admin-users"></div>
            <div id="admin-shoes"></div>
            <div id="addShoes">
                <h2><i class="fas fa-plus"></i> Add Shoe</h2>
                <input id="name" type="text" placeholder="name">
                <input id="type" type="text" placeholder="type">
                <input id="whichGender" type="text" placeholder="gender(men, woman, both)">
                <input id="price" type="number" placeholder="price">
                <button id="addShoe">add</button>
            </div>
            
        </div>
            
            `
        )
    }
}