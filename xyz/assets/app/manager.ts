class Manager {
    placeContainer:PlaceContainer
    output:HTMLElement
    constructor() {
        this.placeContainer = new PlaceContainer()
        this.output = document.getElementById('location')
        this.output.innerHTML = this.render()
    }
    
    render() {
        let string:string = ""
        let { places } = this.placeContainer
        places.forEach(item => {
            string += item.display()
        })
        return string
    }
}