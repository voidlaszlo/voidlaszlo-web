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
                alert(`${shoe.name} added to the database.`)
                this.clearInputs()
            }
        })

        let logoutBtn = document.getElementById('logoutBtn')
        logoutBtn.addEventListener('click', e => {
            alert("logging out...")
            app.getUser()
        })
    }

    render() {
        return (
            `
            <h1>Hi there, Admin</h1>
            <div id="addShoe">
                <input id="name" type="text" placeholder="name">
                <input id="type" type="text" placeholder="type">
                <input id="whichGender" type="text" placeholder="gender(men, woman, both)">
                <input id="price" type="number" placeholder="price">
                <button id="addShoe">add</button>
            </div>
            <button id="logoutBtn">Logout</button>
            `
        )
    }
}