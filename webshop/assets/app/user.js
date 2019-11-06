class User {
    constructor(username) {
        this.username = username
        
        this.favorites = new Favorites()
        this.cart = new Cart()
        this.saveUser()
    }

    saveUser() {
        app.users.push(this)
    }

}