class Game {
    constructor() {

        // BASE
        this.timeLeft = 60
        this.currentCharacter = "Click"

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
        }, 100)
        
    }
}