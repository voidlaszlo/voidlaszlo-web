class ShoeContainer {
    constructor() {
        this.shoes = [
            new Shoe("Nike Air Force 1", "Sneaker", "both", 85),
            new Shoe("Adidas RMD R1", "Sneaker", "men", 125),
            new Shoe("Adidas Superstar", "Sneaker", "woman", 75)
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
        document.getElementById("filters").innerHTML =
        `
        <div class="input">Men<input type="checkbox" value="men"></div>
        <div class="input">Women<input type="checkbox" value="woman"></div>
        `
    }

    render() {
        document.getElementById('shoes').innerHTML = ""
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
                document.getElementById("shoes").innerHTML += `<br><div class="shoes" key="${item.id}">${item.render()}</div><br>`
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
                document.getElementById("shoes").innerHTML += `<br><div class="shoes" key="${item.id}">${item.render()}</div><br>`
            })
        }
        

        
    }
}