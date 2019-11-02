class Game {
    constructor() {

        // BASE
        this.timeLeft = 60
        this.currentCharacter = "Klikk"
        this.correct = 0
        this.wrong = 0

        // SELECTORS
        this.timeLeftPlace = document.getElementById('timeLeft')
        this.currentCharacterPlace = document.getElementById('currentCharacter')

        // INNERHTMLS
        this.timeLeftPlace.innerHTML = `${this.timeLeft}<span>s</span>`
        this.currentCharacterPlace.innerHTML = this.currentCharacter

    }

    // SETTERS
    set character(character) {
        this.currentCharacter = character.toUpperCase()
        this.currentCharacterPlace.innerHTML = this.currentCharacter
    }

    countDown() {       
        this.timeLeftPlace.innerHTML = `${this.timeLeft}<span>s</span>`
        this.timeLeftPlace.removeAttribute("style")

        if(app.usedCharacterCount === 11 || app.usedCharacterCount === 21) {
            let endScreen = document.getElementById('end-screen')
            endScreen.style.display = "flex"
            endScreen.innerHTML = `<p>Vége</p><p><span>${this.correct}</span> pont</p>`
            endScreen.addEventListener('click', e => {
                endScreen.style.display = "none"
                this.correct = 0
                this.wrong = 0
            })

            // REMOVE EVENT LISTENER
            this.currentCharacterPlace.removeEventListener('click', e => {
                if(this.game.timeLeftPlace.textContent === "60s" || this.game.timeLeftPlace.textContent === "Vége") {
                    this.randomize()
                    this.game.countDown()
                    this.removeDisabledInput()
                } else {
                    
                }
            })

            return
        }

        let interval = window.setInterval(e => {
            if(this.timeLeft > 0) {
                this.timeLeft--
                this.timeLeftPlace.innerHTML = `${this.timeLeft}<span>s</span>`
                if(this.timeLeft < 11) {
                    this.timeLeftPlace.style.color = "red"
                } else if(this.timeLeft < 21) {
                    this.timeLeftPlace.style.color = "orange"
                } else if(this.timeLeft < 31) {
                    this.timeLeftPlace.style.color = "yellow"
                }
            } else {
                this.timeLeftPlace.innerHTML = `Vége`
                app.addDisabledInput()
                window.clearInterval(interval)
                return
            }
        }, 1000)
        
    }
}