class Shoe {
    constructor(name, type, whichGender, price) {
        this.name = name
        this.type = type
        this.whichGender = whichGender
        this.price = price
        this.quantity = 0
    }

    render() {
        let {name, type, whichGender, price} = this

        return (

            `
                <h3>${name}</h3>
                <p>(${type})</p>
                <p>${price}&euro;</p>
                <button id="toFavBtn">Favorite &hearts;</button>            
                <button id="toCartBtn">To Cart</button>            
            `

        )
    }

    toFavorite() {        
        app.user.favorites.add(this)
    }

    removeFromFavorite() {
        app.user.favorites.remove(this)
    }

    toCart() {
        app.user.cart.add(this)
    }

    removeFromCart() {
        app.user.cart.remove(this)
    }
}