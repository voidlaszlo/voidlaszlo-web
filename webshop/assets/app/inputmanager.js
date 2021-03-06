class InputManager {
    constructor(){
        this.registerEventListeners()
    }

    registerEventListeners() {
        // SHOES DIV
        let shoes = document.getElementById('shoes')
        shoes.addEventListener('click', e => {
            if(e.target.id === "toFavBtn") {
                app.shoeContainer.shoes[e.target.parentNode.parentNode.attributes["key"].value].toFavorite()
            } else if(e.target.id === "toCartBtn") {
                app.shoeContainer.shoes[e.target.parentNode.parentNode.attributes["key"].value].toCart()
            }
        })

        // CART DIV
        let cart = document.getElementById('cart')
        cart.addEventListener('click', e => {
            if(e.target.id === "removeFromCart") {
                app.shoeContainer.shoes[e.target.parentNode.attributes["key"].value].removeFromCart()
            } else if(e.target.id === "closeCartBtn") {
                cart.style.display = "none"
            }
        })

        // SHOW CART BTN
        let showCartBtn = document.getElementById('showCartBtn')
        showCartBtn.addEventListener('click', e => {
            document.getElementById('cart').style.display = "block"
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
        filters.addEventListener('click', e => {
            if(e.target.attributes["type"].value === "checkbox") {
                app.shoeContainer.render()
            }
        })

        // LOGOUT BUTTON
        let logoutBtn = document.getElementById('logoutBtn')
        logoutBtn.addEventListener('click', e => {
            app.getUser()
        })
    }
}