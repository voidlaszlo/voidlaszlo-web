class Favorites {
    constructor() {
        this.favorites = []
    }

    add(shoe) {
        if(this.favorites.includes(shoe)) {
            alert("already added to favorites")
        } else {
            this.favorites.push(shoe)
        }
        this.render()
    }

    remove(shoe) {
        if(!this.favorites.includes(shoe)) {
            alert("not in the favorities")
        } else {
            this.favorites.splice(this.favorites.indexOf(shoe), 1)
        }
        this.render()
    }

    render() {
        let output = document.getElementById('favorites')
        output.innerHTML = ""
        for(let item of this.favorites) {
            output.innerHTML += 
            `
            <p key="${item.id}">${item.name}, ${item.price}&euro; <button id="removeFromFavorite">remove</button></p>
            `
        }
    }
}