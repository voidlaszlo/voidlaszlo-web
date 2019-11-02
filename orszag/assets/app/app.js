class App {
    constructor() {
        this.game = new Game()
        this.alphabet = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, R, S, T, U, V, Z"
        this.usedCharacterCount = 0
        this.inputs = document.querySelectorAll('input')
        this.format()
        this.registerEventListeners()
        this.addDisabledInput()
    }
    
    format() {
        this.alphabet = this.alphabet.split(", ")
    }

    randomize() {
        if(this.alphabet.length <= 0) {
            
            let endScreen = document.getElementById('end-screen')
            endScreen.style.display = "flex"
            endScreen.innerHTML = `<p>Vége</p><p><span>10</span> pont</p>`

            // REMOVE EVENT LISTENER
            this.game.currentCharacterPlace.removeEventListener('click', e => {
                this.randomize()
                this.game.countDown()
            })

            return

        } else {

            let random = Math.floor(Math.random() * this.alphabet.length)
            this.game.character = this.alphabet[random]
            this.alphabet.splice(this.alphabet.indexOf(this.alphabet[random]), 1)
            this.usedCharacterCount++
            this.game.timeLeft = 60

        }
    }

    removeDisabledInput() {
        this.inputs.forEach(item => {
            item.disabled = false   
            item.value = ""
            item.nextElementSibling.textContent = "✔"
            item.nextElementSibling.style.color = "greenyellow"
            item.style.color = "greenyellow"
        })
    }

    addDisabledInput() {
        this.inputs.forEach(item => {
            item.disabled = true
            if(this.game.timeLeftPlace.textContent === "Vége") {                
                if(item.value === "") {
                item.value = " "
                item.nextElementSibling.textContent = "✖"
                item.nextElementSibling.style.color = "red"
                item.style.borderColor = "darkred"
                item.style.color = "red"

                } else if(!item.value.toUpperCase().startsWith(this.game.currentCharacter.toUpperCase())) {
                item.nextElementSibling.textContent = "✖"
                item.nextElementSibling.style.color = "red"
                item.style.borderColor = "darkred"
                item.style.color = "red"
                
                } else {
                    item.nextElementSibling.textContent = "✔"
                    item.nextElementSibling.style.color = "greenyellow"
                    item.style.borderColor = "darkgreen"
                    item.style.color = "greenyellow"  
                }
            }
        })
    }

    registerEventListeners() {
        // CHARACTER PLACE
        this.game.currentCharacterPlace.addEventListener('click', e => {
            if(this.game.timeLeftPlace.textContent === "60s" || this.game.timeLeftPlace.textContent === "Vége") {
                this.randomize()
                this.game.countDown()
                this.removeDisabledInput()
            } else {
                
            }
        })
    }
}

const app = new App()