class InputManager {
    addButton:HTMLElement
    output:HTMLElement
    constructor(){
        this.addButton = document.getElementById("add-button")
        this.output = document.getElementById("form-output")
        this.registerEventListeners()
    }

    registerEventListeners() {
        this.addButton.addEventListener('click', e => {
            let select:any = document.getElementById("select")
            switch(select.value) {
                case "place":
                    this.getPlace()
                    break
                
                case "restaurant":
                        this.getRestaurant()
                    break
                
                case "event":
                        this.getEvent()
                    break
                
            }
        })
    }

    getPlace() {
        this.output.innerHTML = 
        `
        <input type="text" id="city" placeholder="city">
        <input type="number" id="zip" placeholder="zip">
        <input type="text" id="address" placeholder="address">
        <button id="addPlaceBtn">add</button>
        `
        document.getElementById("addPlaceBtn").addEventListener('click', e => {
            app.manager.placeContainer.addPlace(
                new Place(
                    document.getElementById("city").value,
                    document.getElementById("zip").value,
                    document.getElementById("address").value
                )
            )
            app.manager.output.innerHTML = app.manager.render()
            this.output.innerHTML = ""
        })
        
    }

    getRestaurant() {
        this.output.innerHTML = 
        `
        <input type="text" id="city" placeholder="city">
        <input type="number" id="zip" placeholder="zip">
        <input type="text" id="address" placeholder="address">
        <input type="text" id="phone" placeholder="phone">
        <input type="text" id="type" placeholder="type">
        <input type="text" id="webaddress" placeholder="webaddress">
        <button id="addPlaceBtn">add</button>
        `
        document.getElementById("addPlaceBtn").addEventListener('click', e => {
            app.manager.placeContainer.addPlace(
                new Restaurant(
                    document.getElementById("city").value,
                    document.getElementById("zip").value,
                    document.getElementById("address").value,
                    undefined,
                    document.getElementById("phone").value,
                    document.getElementById("type").value,
                    document.getElementById("webaddress").value,
                )
            )
            app.manager.output.innerHTML = app.manager.render()
            this.output.innerHTML = ""
        })
    }

    getEvent() {
        this.output.innerHTML = 
        `
        <input type="text" id="city" placeholder="city">
        <input type="number" id="zip" placeholder="zip">
        <input type="text" id="address" placeholder="address">
        <input type="text" id="performer" placeholder="performer">
        <input type="text" id="webaddress" placeholder="webaddress">
        <input type="text" id="date" placeholder="date">
        <input type="number" id="price" placeholder="price">
        <button id="addPlaceBtn">add</button>
        `
        document.getElementById("addPlaceBtn").addEventListener('click', e => {
            app.manager.placeContainer.addPlace(
                new EventX(
                    document.getElementById("city").value,
                    document.getElementById("zip").value,
                    document.getElementById("address").value,
                    undefined,
                    document.getElementById("performer").value,
                    document.getElementById("webaddress").value,
                    document.getElementById("date").value,
                    document.getElementById("price").value,
                )
            )
            app.manager.output.innerHTML = app.manager.render()
            this.output.innerHTML = ""
        })        
    }


}

class Manager {
    placeContainer:PlaceContainer
    inputManager:InputManager
    output:HTMLElement
    constructor() {
        this.placeContainer = new PlaceContainer()
        this.inputManager = new InputManager()
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

//vls&gh7