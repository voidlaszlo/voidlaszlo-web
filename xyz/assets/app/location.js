var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Place = /** @class */ (function () {
    function Place(city, zip, address, imgurl) {
        if (city === void 0) { city = "no data"; }
        if (zip === void 0) { zip = -1; }
        if (address === void 0) { address = "no data"; }
        if (imgurl === void 0) { imgurl = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"; }
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.imgurl = imgurl;
    }
    Place.prototype.display = function () {
        return ("\n            <div class=\"place\">\n                <h4>" + this.constructor.name + "</h4>\n                <img src=\"" + this.imgurl + "\">\n                <div class=\"place-body\">\n                    <h2>" + this.city + "</h2>\n                    <p>" + this.address + ", " + this.zip + "</p>\n                </div>\n            </div>\n            ");
    };
    return Place;
}());
// RESTAURANT
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zip, address, imgurl, phoneNumber, type, webAddress) {
        if (city === void 0) { city = "no data"; }
        if (zip === void 0) { zip = -1; }
        if (address === void 0) { address = "no data"; }
        if (imgurl === void 0) { imgurl = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"; }
        if (phoneNumber === void 0) { phoneNumber = "XXX-XXX-XXXX"; }
        if (type === void 0) { type = "no-data"; }
        if (webAddress === void 0) { webAddress = "www.xyz.com"; }
        var _this = _super.call(this, city, zip, address, imgurl) || this;
        _this.phoneNumber = phoneNumber;
        _this.type = type;
        _this.webAddress = webAddress;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return ("\n            <div class=\"place\">\n                <h4>" + this.constructor.name + "</h4>\n                <img src=\"" + this.imgurl + "\">\n                <div class=\"place-body\">\n                    <h2>" + this.city + "</h2>\n                    <p>" + this.address + ", " + this.zip + "</p>\n                    <p>" + this.phoneNumber + ", " + this.type + ", " + this.webAddress + "</p>\n                </div>\n            </div>\n            ");
    };
    return Restaurant;
}(Place));
// EVENT
var EventX = /** @class */ (function (_super) {
    __extends(EventX, _super);
    function EventX(city, zip, address, imgurl, performer, webAddress, date, price) {
        if (city === void 0) { city = "no data"; }
        if (zip === void 0) { zip = -1; }
        if (address === void 0) { address = "no data"; }
        if (imgurl === void 0) { imgurl = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"; }
        if (performer === void 0) { performer = "Xyz Smith"; }
        if (webAddress === void 0) { webAddress = "www.xyz.com"; }
        if (date === void 0) { date = "31. Februar"; }
        if (price === void 0) { price = -1; }
        var _this = _super.call(this, city, zip, address, imgurl) || this;
        _this.performer = performer;
        _this.webAddress = webAddress;
        _this.date = date;
        _this.price = price;
        return _this;
    }
    EventX.prototype.display = function () {
        return ("\n            <div class=\"place\">\n                <h4>" + this.constructor.name + "</h4>\n                <img src=\"" + this.imgurl + "\">\n                <div class=\"place-body\">\n                    <h2>" + this.city + "</h2>\n                    <p>" + this.address + ", " + this.zip + "</p>\n                    <p>Performer : " + this.performer + "</p>\n                    <p>Website : " + this.webAddress + "</p>\n                    <p>Date : " + this.date + "</p>\n                    <p>Price : " + this.price + "&euro;</p>\n                </div>\n            </div>\n            ");
    };
    return EventX;
}(Place));
var PlaceContainer = /** @class */ (function () {
    function PlaceContainer() {
        this.places = [
            new Place("Place 1", 1100, "Code Straße 43 / 1007"),
            new Place("Place 2", 6650, "Angular Straße 77 / 7"),
            new Restaurant("Restaurant 1", 2750, "Carbonara Straße 12 / 26"),
            new EventX("Event 1", 7341, "Donau Insel")
        ];
    }
    PlaceContainer.prototype.addPlace = function (place) {
        this.places.push(place);
    };
    return PlaceContainer;
}());
