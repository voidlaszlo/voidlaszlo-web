class ShoeContainer {
    constructor() {
        this.shoes = [
            new Shoe("Nike Air Force 1", "Sneaker", "both", 85),
            new Shoe("Adidas RMD R1", "Sneaker", "men", 125),
            new Shoe("Nike Jordan 3", "Sneaker", "men", 135),
            new Shoe("Adidas Yeezy", "Sneaker", "both", 300),
            new Shoe("Nike Free Run", "Running", "both", 75),
            new Shoe("Nike Roshe", "Running", "woman", 40),
            new Shoe("New Balance 3", "Sneaker", "woman", 50),
        ]
        this.genIndex()
        this.checkedFilters = []
    }

    genIndex() {
        this.shoes.forEach(x => {
            x.id = this.shoes.indexOf(x)
        })
    }

    filterShoes() {
        document.getElementById("filters").innerHTML +=
        `
        <div class="input"><p>Men</p><input type="checkbox" value="men"></div>
        <div class="input"><p>Women</p><input type="checkbox" value="woman"></div>
        `

        document.getElementById("search-field").innerHTML =
        `
        <div class="search-top">
            <input type="text" placeholder="Search...">
        </div>
        <div class="search-bottom">
            <button id="searchBtn">Search</button>
        </div>
        `
    }

    render() {
        document.getElementById('shoes').innerHTML = "<h2>Shoes</h2>"
        this.checkedFilters = []

        let inputs = document.querySelectorAll('input[type="checkbox"]')
        if(inputs !== undefined) {
            for(let input of inputs) {
                if(input.checked) {
                    this.checkedFilters.push(input.value)
                }
            }
        }

        if(this.checkedFilters.length === 0) {
            this.shoes.forEach(item => {
                document.getElementById("shoes").innerHTML += `<hr><div class="shoe" key="${item.id}">${item.render()}</div>`
            })
        } else {
            let checkedFiltersString = this.checkedFilters.join(" ")
            console.log(checkedFiltersString)

            let filteredShoes = this.shoes.filter(item => {
                if(checkedFiltersString.includes(item.whichGender) || item.whichGender === "both") {
                    return item
                }
            })

            filteredShoes.forEach(item => {
                document.getElementById("shoes").innerHTML += `<hr><div class="shoe" key="${item.id}">${item.render()}</div>`
            })
        }
        

        
    }
}