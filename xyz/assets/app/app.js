var App = /** @class */ (function () {
    function App() {
        this.output = document.getElementById('root');
        this.output.innerHTML = this.render();
        this.manager = new Manager();
    }
    App.prototype.render = function () {
        return ("\n            <div id=\"location\"></div>\n            ");
    };
    return App;
}());
var app = new App();
