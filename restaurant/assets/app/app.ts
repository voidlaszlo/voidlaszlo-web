let data = {
    food : [
        {
            "id" : 1,
            "name" : "Carbonara",
            "desc" : "This is a really nice food.",
            "price" : 7.95,
            "imgurl" : "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart" : false,
            "quantity": 0,
            "comments" : [
                {
                    "id" : 1,
                    "author" : "Erika",
                    "body" : "This is really tasty!",
                    "rating" : 5
                }
            ]
        },
        {
            "id" : 2,
            "name" : "Bolognese",
            "desc" : "This is a really nice food.",
            "price" : 6.55,
            "imgurl" : "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart" : false,
            "quantity": 0,
            "comments" : []
        },
        {
            "id" : 3,
            "name" : "Pizza Salami",
            "desc" : "This is a really nice food.",
            "price" : 7.54,
            "imgurl" : "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart" : false,
            "quantity": 0,
            "comments" : [
                {
                    "id" : 1,
                    "author" : "Erika",
                    "body" : "This is really tasty!",
                    "rating" : 5
                },
                {
                    "id" : 2,
                    "author" : "Tamas",
                    "body" : "Meh...",
                    "rating" : 2
                }
            ]
        },
        {
            "id" : 4,
            "name" : "Chicken Salad",
            "desc" : "This is a really nice food.",
            "price" : 8.55,
            "imgurl" : "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart" : false,
            "quantity": 0,
            "comments" : [
                {
                    "id" : 1,
                    "author" : "Erika",
                    "body" : "This is really tasty!",
                    "rating" : 5
                }
            ]
        },        
        {
            "id" : 5,
            "name" : "Pizza Margharita",
            "desc" : "This is a really nice food.",
            "price" : 7.95,
            "imgurl" : "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart" : false,
            "quantity": 0,
            "comments" : [
                {
                    "id" : 1,
                    "author" : "Erika",
                    "body" : "This is really tasty!",
                    "rating" : 5
                }
            ]
        },
        {
            "id" : 6,
            "name" : "Pizza Hawaii",
            "desc" : "This is a really nice food.",
            "price" : 6.55,
            "imgurl" : "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart" : false,
            "quantity": 0,
            "comments" : []
        },
        {
            "id" : 7,
            "name" : "Milanese",
            "desc" : "This is a really nice food.",
            "price" : 7.54,
            "imgurl" : "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart" : false,
            "quantity": 0,
            "comments" : [
                {
                    "id" : 1,
                    "author" : "Erika",
                    "body" : "This is really tasty!",
                    "rating" : 5
                },
                {
                    "id" : 2,
                    "author" : "Tamas",
                    "body" : "Meh...",
                    "rating" : 2
                }
            ]
        },
        {
            "id" : 8,
            "name" : "Gulasch",
            "desc" : "This is a really nice food.",
            "price" : 8.55,
            "imgurl" : "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart" : false,
            "quantity": 0,
            "comments" : [
                {
                    "id" : 1,
                    "author" : "Erika",
                    "body" : "This is really tasty!",
                    "rating" : 5
                }
            ]
        }        
    ]
}

class Restaurant {
    food: any[]
    total: number
    constructor({food} = data) {
        this.food = food
        this.total = 0
        this.displayFoods()   
        this.registerEventListeners()
    }

    displayFoods() {
        let output = document.getElementById('menu')
        output.innerHTML = ""
        for(let item of this.food) {
            let {id} = item
            let {name} = item
            let {desc} = item
            let {price} = item
            let {imgurl} = item
            let {isInCart} = item
            let {comments} = item

            output.innerHTML += 
            `
            <div id="${id}" class="card">
                <img src="${imgurl}" alt="image">
                <div class="card-desc">
                    <h2>${name}</h2>
                    <p>${desc}</p>
                    <small>${price}&euro;</small>
                    <button class="addToCartBtn" target="${id}">Order</button>
                </div>
                ${comments.length === 0 ? "" : `<div class="card-comments">
                <h3>Comments : </h3>
                <ul id="${id}">
                    
                </ul>
            </div>`}
            <div class="card-open-comments">comments &#8628;</div>
            </div>
            `

            this.displayComments(id, comments)
        }
        return "display done" 
    }

    displayComments(id, comments) {
        let ul = document.querySelector(`ul[id="${id}"]`)        
        if(ul === null) {
            return "no ul"
        } else {
            ul.innerHTML = ""
            for(let comment of comments) {
                let { id } = comment
                let { author }  = comment
                let { body } = comment
                let { rating } = comment
                ul.innerHTML += 
                `
                <li key="${id}"><p>${body}</p><p>Rating : ${rating}*</p><small>&mdash;${author}</small></li>
                `                
            }
        }
    }

    registerEventListeners() {
        // SHOW COMMENT BUTTONS
        let commentBtns = document.querySelectorAll('.card-open-comments')
        this.showComments(commentBtns)

        // CART BUTTON
        const cartBtn = document.getElementById('cartBtn')
        cartBtn.addEventListener('click', e => {
            e.preventDefault()
            document.getElementById('cart').style.display = document.getElementById('cart').style.display === "none" ? "flex" : "none"
        })

        // ADD TO CART BUTTONS
        const addToCartBtns:any = document.querySelectorAll('.addToCartBtn')
        for(let btn of addToCartBtns) {
            btn.addEventListener('click', e => {
                // MAKE ISINCART TRUE
                this.food[parseInt(e.target.attributes["target"].value) - 1].isInCart = true
                this.food[parseInt(e.target.attributes["target"].value) - 1].quantity += 1
                this.displayCartItems()

            })
        }

        // CLOSE CART BUTTON / REMOVE ITEM BUTTON
        document.getElementById('cart').addEventListener('click', e => {
            // GET CLOSECARTBTN BASED ON ID
            if(e.target["id"] === "closeCartBtn") {
                // CHANGE THE DISPLAY FROM THE CART TO NONE
                document.getElementById('cart').style.display = "none"
            
            // IF THE EVENT TARGET IS THE REMOVE BUTTON
            } else if((<Element>e.target).className === "removeBtn") {
                // CHANGE THE QUANTITY IN THE FOOD ARRAY BASED ON TARGETID
                if(this.food[parseInt((<Element>e.target).attributes["target"].value) - 1].quantity <= 1) {
                    // CHANGE THE ISINCART TO FALSE IF ITS 0
                    this.food[parseInt((<Element>e.target).attributes["target"].value) - 1].isInCart = false
                }
                // QUANTITY -- IF ITS OVER 0
                this.food[parseInt((<Element>e.target).attributes["target"].value) - 1].quantity--
                // DISPLAY CART ITEMS ONCE MORE
                this.displayCartItems()
            }
        })
    }

    showComments(buttons) {   
        for (let button of buttons) {
            button.addEventListener('click', e => {
                if(button.parentNode.children[2].className === "card-comments") {
                    button.parentNode.children[2].style.display = button.parentNode.children[2].style.display === "block" ? "none" : "block"
                } else {
                    alert("no comments there")
                }
            })
        }
    }

    displayCartItems() {
        let newArr = this.food.filter(x => x.isInCart)
        let output = document.getElementById('cart')
        output.innerHTML = ""
        this.total = 0
        for(let item of newArr) {
            this.total += (parseFloat(item.price) * parseFloat(item.quantity))
            output.innerHTML += 
            `
            <div key="${item.id}">
                <p>${item.name}</p>
                <p>${item.quantity}</p>
                <small>${parseFloat(item.price.toFixed(2)) * parseFloat(item.quantity.toFixed(2))}&euro;</small>
                <button target="${item.id}" class="removeBtn">Remove</>
            </div>
            `
        }
        output.innerHTML += 
        `
        <hr>
        <p>Total : ${this.total.toFixed(2)}&euro;</p>
        <button id="closeCartBtn">Close</button>
        `
        return newArr
    }
}

const restaurant = new Restaurant(data)