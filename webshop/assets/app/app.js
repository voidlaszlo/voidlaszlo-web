class App {
    constructor() {
        this.user = this.getUser()
        this.users = []
        this.shoeContainer = new ShoeContainer()      
    }

    getUser() {
        document.body.innerHTML = 
        `
        <div id="login-container">
            <div class="login-text">
                <h1>Hi there!</h1>
                <p>This is a front-end only web shop.</p>
            </div>
            <div class="login-input">
                <input autocomplete="false" id="username" type="text" placeholder="username">
                <button>Login</button>
            </div>
            <p><a href="https://voidlaszlo.com">www.voidlaszlo.com</a></p>
        </div>
        `

        document.querySelector('button').addEventListener('click', e => {
            if(document.getElementById('username').value.toLowerCase() === "admin") {
                this.user = new Admin()
                this.user.render()
            } else {         
                for(let item of this.users) {
                    let { username } = item
                    console.log(item)
                    if(username.toLowerCase().includes(document.getElementById('username').value.toLowerCase())) {
                        this.user = item
                        this.render()
                        this.user.cart.render()
                        this.user.favorites.render()
                        return
                    } else {
                        
                    }
                }       
                this.user = new User(document.getElementById('username').value.toLowerCase())
                this.render()
            }
            
        })
    }

    render() {
        document.body.innerHTML = `
        <div id="root">

            
            

            <header>
            <h1><small>Hi, </small>${this.user.username}</h1>
            <div class="header-right">
                <button id="showCartBtn"><i class="fas fa-shopping-cart"></i></button>
                <button id="logoutBtn">Logout</button>
            </div>
            </header>
            <div id="favorites"><p id="placeholder-fav">No Favorites</p></div>
            <div id="search-filters">
                <h2>Filters</h2>
                <div id="filters"></div>
                <div id="search-field"></div>
            </div>
            <div id="shoes"></div>
            <div id="cart"></div>
            <footer>
                <p><a href="https://voidlaszlo.com">www.voidlaszlo.com</a></p>
            </footer>

        </div>`

        this.shoeContainer.render()
        this.shoeContainer.filterShoes()
        this.inputManager = new InputManager()
        document.body.scrollIntoView()
    }
}

const app = new App()