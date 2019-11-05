var InputManager = /** @class */ (function () {
    function InputManager() {
        this.addButton = document.getElementById("add-button");
        this.output = document.getElementById("form-output");
        this.registerEventListeners();
    }
    InputManager.prototype.registerEventListeners = function () {
        var _this = this;
        this.addButton.addEventListener('click', function (e) {
            var select = document.getElementById("select");
            switch (select.value) {
                case "place":
                    _this.getPlace();
                    break;
                case "restaurant":
                    _this.getRestaurant();
                    break;
                case "event":
                    _this.getEvent();
                    break;
            }
        });
    };
    InputManager.prototype.getPlace = function () {
        var _this = this;
        this.output.innerHTML =
            "\n        <input type=\"text\" id=\"city\" placeholder=\"city\">\n        <input type=\"number\" id=\"zip\" placeholder=\"zip\">\n        <input type=\"text\" id=\"address\" placeholder=\"address\">\n        <button id=\"addPlaceBtn\">add</button>\n        ";
        document.getElementById("addPlaceBtn").addEventListener('click', function (e) {
            app.manager.placeContainer.addPlace(new Place(document.getElementById("city").value, document.getElementById("zip").value, document.getElementById("address").value));
            app.manager.output.innerHTML = app.manager.render();
            _this.output.innerHTML = "";
        });
    };
    InputManager.prototype.getRestaurant = function () {
        var _this = this;
        this.output.innerHTML =
            "\n        <input type=\"text\" id=\"city\" placeholder=\"city\">\n        <input type=\"number\" id=\"zip\" placeholder=\"zip\">\n        <input type=\"text\" id=\"address\" placeholder=\"address\">\n        <input type=\"text\" id=\"phone\" placeholder=\"phone\">\n        <input type=\"text\" id=\"type\" placeholder=\"type\">\n        <input type=\"text\" id=\"webaddress\" placeholder=\"webaddress\">\n        <button id=\"addPlaceBtn\">add</button>\n        ";
        document.getElementById("addPlaceBtn").addEventListener('click', function (e) {
            app.manager.placeContainer.addPlace(new Restaurant(document.getElementById("city").value, document.getElementById("zip").value, document.getElementById("address").value, undefined, document.getElementById("phone").value, document.getElementById("type").value, document.getElementById("webaddress").value));
            app.manager.output.innerHTML = app.manager.render();
            _this.output.innerHTML = "";
        });
    };
    InputManager.prototype.getEvent = function () {
        var _this = this;
        this.output.innerHTML =
            "\n        <input type=\"text\" id=\"city\" placeholder=\"city\">\n        <input type=\"number\" id=\"zip\" placeholder=\"zip\">\n        <input type=\"text\" id=\"address\" placeholder=\"address\">\n        <input type=\"text\" id=\"performer\" placeholder=\"performer\">\n        <input type=\"text\" id=\"webaddress\" placeholder=\"webaddress\">\n        <input type=\"text\" id=\"date\" placeholder=\"date\">\n        <input type=\"number\" id=\"price\" placeholder=\"price\">\n        <button id=\"addPlaceBtn\">add</button>\n        ";
        document.getElementById("addPlaceBtn").addEventListener('click', function (e) {
            app.manager.placeContainer.addPlace(new EventX(document.getElementById("city").value, document.getElementById("zip").value, document.getElementById("address").value, undefined, document.getElementById("performer").value, document.getElementById("webaddress").value, document.getElementById("date").value, document.getElementById("price").value));
            app.manager.output.innerHTML = app.manager.render();
            _this.output.innerHTML = "";
        });
    };
    return InputManager;
}());
var Manager = /** @class */ (function () {
    function Manager() {
        this.placeContainer = new PlaceContainer();
        this.inputManager = new InputManager();
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
//vls&gh7
