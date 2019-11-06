class Cart {
    constructor() {
        this.cart = []
        this.total = 0
    }

    add(shoe) {
        if(this.cart.includes(shoe)) {
            shoe.quantity++
            this.total += shoe.price
        } else {
            this.cart.push(shoe)
            shoe.quantity++
            this.total += shoe.price
        }
        this.render()
    }

    remove(shoe) {
        if(this.cart.includes(shoe)) {
            if(shoe.quantity === 1) {
                shoe.quantity--
                this.total -= shoe.price
                this.cart.splice(this.cart.indexOf(shoe), 1)
            } else if(shoe.quantity > 1) {
                shoe.quantity--
                this.total -= shoe.price
            }
            this.total === 0 ? document.getElementById('cart').innerHTML = "" : this.render()
        } else {
            alert("shoe not in the cart")
        }
    }

    render() {
        let output = document.getElementById('cart')
        output.innerHTML = ""
        for(let item of this.cart) {
            output.innerHTML += 
            `
            <p key="${item.id}">${item.name}, ${item.price}&euro; | ${item.quantity} <button id="removeFromCart">remove</button></p>
            `
        }
        output.innerHTML += `<p>Total : ${this.total}&euro;</p>`
    }
}