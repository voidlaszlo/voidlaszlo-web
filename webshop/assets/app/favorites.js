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
            this.favorites.splice(this.favorites.indexOf(shoe), 1)
        } else {
            this.favorites.splice(this.favorites.indexOf(shoe), 1)
        }
        this.render()
    }

    render() {
        let output = document.getElementById('favorites')
        output.innerHTML = this.favorites.length > 0 ? "" : `<p id="placeholder-fav">No Favorites</p>`
        for(let item of this.favorites) {
            output.innerHTML += 
            `
            <div key="${item.id}" class="favorite-item">
                <p>${item.name.split(" ")[0]}</p>
                <button id="removeFromFavorite">x</button>
            </div>
            `
        }
    }
}