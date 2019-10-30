var Manager = /** @class */ (function () {
    function Manager() {
        this.placeContainer = new PlaceContainer();
        this.output = document.getElementById('location');
        this.output.innerHTML = this.render();
    }
    Manager.prototype.render = function () {
        var string = "";
        var places = this.placeContainer.places;
        places.forEach(function (item) {
            string += item.display();
        });
        return string;
    };
    return Manager;
}());
