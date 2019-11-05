class App {
    constructor() {
        this.game = new Game(1000)
        //this.alphabet = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, R, S, T, U, V, Z"
        this.alphabet = "J, K, I, L, H, M, G, O, A, D, B, E, C, P, T, S, R, F, U, Z, N, V"
        this.usedCharacterCount = 0
        this.inputs = document.querySelectorAll('input')
        this.questionMarks = document.querySelectorAll('.question-mark')
        this.format()
        this.registerEventListeners()
        this.addDisabledInput()
        this.changeCorrect()
    }
    
    format() {
        this.alphabet = this.alphabet.split(", ")
        this.alphabet.splice(10, 0, "Klikk")
        this.alphabet.splice(20, 0, "Klikk")
    }

    randomize() {
        if(this.alphabet.length <= 0) {
            
            let endScreen = document.getElementById('end-screen')
            endScreen.style.display = "flex"
            endScreen.innerHTML = `<p>Vége</p>`

            // REMOVE EVENT LISTENER
            this.game.currentCharacterPlace.removeEventListener('click', e => {
                this.randomize()
                this.game.countDown()
            })

            return

        } else {

            let random = Math.floor(Math.random() * this.alphabet.length)
            this.game.character = this.alphabet[0]
            this.alphabet.splice(this.alphabet.indexOf(this.alphabet[0]), 1)
            this.usedCharacterCount++
            this.game.timeLeft = 60

        }
    }

    removeDisabledInput() {
        this.inputs.forEach(item => {
            item.removeAttribute("style")
            item.disabled = false   
            item.value = ""
            item.nextElementSibling.textContent = "✔"
            item.nextElementSibling.style.color = "greenyellow"
            item.style.color = "greenyellow"
            item.nextElementSibling.nextElementSibling.style.display = "none"
            item.nextElementSibling.nextElementSibling.setAttribute("href", "#")
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
                item.nextElementSibling.nextElementSibling.style.display = "block"
                item.nextElementSibling.nextElementSibling.setAttribute("href", `https://google.com/search?q=${item.value}`)
                
                if(item.attributes["minlength"]) {
                    if(item.value.length < item.attributes["minlength"].value) {
                        item.nextElementSibling.textContent = "✖"
                        item.nextElementSibling.style.color = "red"
                        item.style.borderColor = "darkred"
                        item.style.color = "red"
                    }
                }
                
                } else {
                    item.nextElementSibling.textContent = "✔"
                    item.nextElementSibling.style.color = "greenyellow"
                    item.style.borderColor = "darkgreen"
                    item.style.color = "greenyellow"
                    item.nextElementSibling.nextElementSibling.style.display = "block"
                    item.nextElementSibling.nextElementSibling.setAttribute("href", `https://google.com/search?q=${item.value}`)
                    
                    if(item.attributes["minlength"]) {
                        if(item.value.length < parseInt(item.attributes["minlength"].value)) {
                            item.nextElementSibling.textContent = "✖"
                            item.nextElementSibling.style.color = "red"
                            item.style.borderColor = "darkred"
                            item.style.color = "red"
                        }
                    }  
                }
            }
        })
    }

    checkAnswers() {
        this.inputs.forEach(item => {
            switch(item.nextElementSibling.textContent) {

                case "✔" :
                    this.game.correct++
                    break

                case "✖" :
                    this.game.wrong++
                    break
            }
        })
    }

    // CHANGE CORRECT
    changeCorrect() {
            this.inputs.forEach(item => {
                item.previousElementSibling.addEventListener('click', e => {
                    if(document.getElementById('timeLeft').textContent === "Vége") {

                        if(item.value === " ") {

                        } else {
                            
                            item.nextElementSibling.textContent = item.nextElementSibling.textContent === "✔" ? "✖" : "✔"
                            switch(item.nextElementSibling.textContent) {
                                case "✔":
                                    item.nextElementSibling.style.color = "greenyellow"
                                    item.style.borderColor = "darkgreen"
                                    item.style.color = "greenyellow"  
                                    break
        
                                case "✖":
                                    item.nextElementSibling.style.color = "red"
                                    item.style.borderColor = "darkred"
                                    item.style.color = "red"
                                    break 
                            }
                        }

                    } else {

                    }
                })
            })
        
    }

    registerEventListeners() {
        // CHARACTER PLACE
        this.game.currentCharacterPlace.addEventListener('click', e => {
            if(this.game.timeLeftPlace.textContent === "60s" || this.game.timeLeftPlace.textContent === "Vége") {
                app.usedCharacterCount === 0 ? null : this.checkAnswers()
                this.randomize()
                this.game.countDown()
                this.removeDisabledInput()
                
            } else {
                
            }
        })
    }

}

const app = new App()