class InputManager {
    constructor(){
        this.registerEventListeners()
    }

    registerEventListeners() {
        // SHOES DIV
        let shoes = document.getElementById('shoes')
        shoes.addEventListener('click', e => {
            if(e.target.id === "toFavBtn") {
                app.shoeContainer.shoes[e.target.parentNode.attributes["key"].value].toFavorite()
            } else if(e.target.id === "toCartBtn") {
                app.shoeContainer.shoes[e.target.parentNode.attributes["key"].value].toCart()
            }
        })

        // CART DIV
        let cart = document.getElementById('cart')
        cart.addEventListener('click', e => {
            if(e.target.id === "removeFromCart") {
                app.shoeContainer.shoes[e.target.parentNode.attributes["key"].value].removeFromCart()
            }
        })

        // FAVORITES DIV
        let favorites = document.getElementById('favorites')
        favorites.addEventListener('click', e => {
            if(e.target.id === "removeFromFavorite") {
                app.shoeContainer.shoes[e.target.parentNode.attributes["key"].value].removeFromFavorite()
            }
        })

        // FILTERS DIV
        let filters = document.getElementById('filters')
        console.log(filters)
        filters.addEventListener('click', e => {
            if(e.target.attributes["type"].value === "checkbox") {
                app.shoeContainer.render()
            }
        })

        // LOGOUT BUTTON
        let logoutBtn = document.getElementById('logoutBtn')
        logoutBtn.addEventListener('click', e => {
            alert("logging out...")
            app.getUser()
        })
    }
}