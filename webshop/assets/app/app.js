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
                <input id="username" type="text" placeholder="username">
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

            <div id="cart"></div>
            <div id="favorites"></div>

            <h1>welcome there, ${this.user.username}<button id="logoutBtn">Logout</button></h1>
            <div id="shoes"></div>
            <div id="filters"></div>

        </div>`

        this.shoeContainer.render()
        this.shoeContainer.filterShoes()
        this.inputManager = new InputManager()
    }
}

const app = new App()