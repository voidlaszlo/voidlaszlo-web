class Place {
    city:string
    zip:number
    address:string
    imgurl:string
    constructor(city:string = "no data", zip:number = -1, address:string = "no data", imgurl:string = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80") {
        this.city = city
        this.zip = zip
        this.address = address
        this.imgurl = imgurl
    }

    display() {
        return (
            `
            <div class="place">
                <h4>${this.constructor.name}</h4>
                <img src="${this.imgurl}">
                <div class="place-body">
                    <h2>${this.city}</h2>
                    <p>${this.address}, ${this.zip}</p>
                </div>
            </div>
            `
        )
    }
}

// RESTAURANT
class Restaurant extends Place {
    phoneNumber:string
    type:string
    webAddress:string
    constructor(city:string = "no data", zip:number = -1, address:string = "no data", imgurl:string = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", phoneNumber:string="XXX-XXX-XXXX", type:string="no-data", webAddress:string="www.xyz.com") {
        super(city, zip, address, imgurl)
        this.phoneNumber = phoneNumber
        this.type = type
        this.webAddress = webAddress
    }

    display() {
        return (
            `
            <div class="place">
                <h4>${this.constructor.name}</h4>
                <img src="${this.imgurl}">
                <div class="place-body">
                    <h2>${this.city}</h2>
                    <p>${this.address}, ${this.zip}</p>
                    <p>${this.phoneNumber}, ${this.type}, ${this.webAddress}</p>
                </div>
            </div>
            `
        )
    }
}

// EVENT
class EventX extends Place {
    performer:string
    webAddress:string
    date:string
    price:number
    constructor(city:string = "no data", zip:number = -1, address:string = "no data", imgurl:string = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", performer:string="Xyz Smith", webAddress:string = "www.xyz.com", date:string = "31. Februar", price:number = -1) {
        super(city, zip, address, imgurl)
        this.performer = performer
        this.webAddress = webAddress
        this.date = date
        this.price = price
    }

    display() {
        return (
            `
            <div class="place">
                <h4>${this.constructor.name}</h4>
                <img src="${this.imgurl}">
                <div class="place-body">
                    <h2>${this.city}</h2>
                    <p>${this.address}, ${this.zip}</p>
                    <p>Performer : ${this.performer}</p>
                    <p>Website : ${this.webAddress}</p>
                    <p>Date : ${this.date}</p>
                    <p>Price : ${this.price}&euro;</p>
                </div>
            </div>
            `
        )
    }
}

class PlaceContainer {
    places:Place[]
    constructor() {
        this.places = [
            new Place(),
            new Place(),
            new Restaurant(),
            new EventX()
        ]
    }
}