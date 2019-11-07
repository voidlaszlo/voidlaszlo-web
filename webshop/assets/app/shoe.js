class Shoe {
    constructor(name = "Default", type = "Sneaker", whichGender = "both", price = 50) {
        this.name = name
        this.type = type
        this.whichGender = whichGender
        this.price = price
        this.quantity = 0
        this.rating = 0
        this.comments = []
    }

    render() {
        let {name, type, whichGender, price} = this

        return (

            `
            <div class="shoe-left">
                <img src="./assets/img/af1.png">
                <button id="toFavBtn">&hearts;</button>
            </div>
            <div class="shoe-right">
                <div class="shoe-right-text">
                    <h3>${name}</h3>
                    <p>(${type})/${whichGender}</p>
                </div>
                <p>${price}&euro;</p>
                <button id="toCartBtn">To Cart</button>   
            </div>             
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

    removeFromContainer() {
        app.shoeContainer.remove(this)
    }
}