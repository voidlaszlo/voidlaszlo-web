var data = {
    food: [
        {
            "id": 1,
            "name": "Carbonara",
            "desc": "This is a really nice food.",
            "price": 7.95,
            "imgurl": "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart": false,
            "quantity": 0,
            "comments": [
                {
                    "id": 1,
                    "author": "Erika",
                    "body": "This is really tasty!",
                    "rating": 5
                }
            ]
        },
        {
            "id": 2,
            "name": "Bolognese",
            "desc": "This is a really nice food.",
            "price": 6.55,
            "imgurl": "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart": false,
            "quantity": 0,
            "comments": []
        },
        {
            "id": 3,
            "name": "Pizza Salami",
            "desc": "This is a really nice food.",
            "price": 7.54,
            "imgurl": "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart": false,
            "quantity": 0,
            "comments": [
                {
                    "id": 1,
                    "author": "Erika",
                    "body": "This is really tasty!",
                    "rating": 5
                },
                {
                    "id": 2,
                    "author": "Tamas",
                    "body": "Meh...",
                    "rating": 2
                }
            ]
        },
        {
            "id": 4,
            "name": "Chicken Salad",
            "desc": "This is a really nice food.",
            "price": 8.55,
            "imgurl": "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart": false,
            "quantity": 0,
            "comments": [
                {
                    "id": 1,
                    "author": "Erika",
                    "body": "This is really tasty!",
                    "rating": 5
                }
            ]
        },
        {
            "id": 5,
            "name": "Pizza Margharita",
            "desc": "This is a really nice food.",
            "price": 7.95,
            "imgurl": "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart": false,
            "quantity": 0,
            "comments": [
                {
                    "id": 1,
                    "author": "Erika",
                    "body": "This is really tasty!",
                    "rating": 5
                }
            ]
        },
        {
            "id": 6,
            "name": "Pizza Hawaii",
            "desc": "This is a really nice food.",
            "price": 6.55,
            "imgurl": "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart": false,
            "quantity": 0,
            "comments": []
        },
        {
            "id": 7,
            "name": "Milanese",
            "desc": "This is a really nice food.",
            "price": 7.54,
            "imgurl": "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart": false,
            "quantity": 0,
            "comments": [
                {
                    "id": 1,
                    "author": "Erika",
                    "body": "This is really tasty!",
                    "rating": 5
                },
                {
                    "id": 2,
                    "author": "Tamas",
                    "body": "Meh...",
                    "rating": 2
                }
            ]
        },
        {
            "id": 8,
            "name": "Gulasch",
            "desc": "This is a really nice food.",
            "price": 8.55,
            "imgurl": "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "isInCart": false,
            "quantity": 0,
            "comments": [
                {
                    "id": 1,
                    "author": "Erika",
                    "body": "This is really tasty!",
                    "rating": 5
                }
            ]
        }
    ]
};
var Restaurant = /** @class */ (function () {
    function Restaurant(_a) {
        var food = (_a === void 0 ? data : _a).food;
        this.food = food;
        this.total = 0;
        this.displayFoods();
        this.registerEventListeners();
    }
    Restaurant.prototype.displayFoods = function () {
        var output = document.getElementById('menu');
        output.innerHTML = "";
        for (var _i = 0, _a = this.food; _i < _a.length; _i++) {
            var item = _a[_i];
            var id = item.id;
            var name_1 = item.name;
            var desc = item.desc;
            var price = item.price;
            var imgurl = item.imgurl;
            var isInCart = item.isInCart;
            var comments = item.comments;
            output.innerHTML +=
                "\n            <div id=\"" + id + "\" class=\"card\">\n                <img src=\"" + imgurl + "\" alt=\"image\">\n                <div class=\"card-desc\">\n                    <h2>" + name_1 + "</h2>\n                    <p>" + desc + "</p>\n                    <small>" + price + "&euro;</small>\n                    <button class=\"addToCartBtn\" target=\"" + id + "\">Order</button>\n                </div>\n                " + (comments.length === 0 ? "" : "<div class=\"card-comments\">\n                <h3>Comments : </h3>\n                <ul id=\"" + id + "\">\n                    \n                </ul>\n            </div>") + "\n            <div class=\"card-open-comments\">comments &#8628;</div>\n            </div>\n            ";
            this.displayComments(id, comments);
        }
        return "display done";
    };
    Restaurant.prototype.displayComments = function (id, comments) {
        var ul = document.querySelector("ul[id=\"" + id + "\"]");
        if (ul === null) {
            return "no ul";
        }
        else {
            ul.innerHTML = "";
            for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {
                var comment = comments_1[_i];
                var id_1 = comment.id;
                var author = comment.author;
                var body = comment.body;
                var rating = comment.rating;
                ul.innerHTML +=
                    "\n                <li key=\"" + id_1 + "\"><p>" + body + "</p><p>Rating : " + rating + "*</p><small>&mdash;" + author + "</small></li>\n                ";
            }
        }
    };
    Restaurant.prototype.registerEventListeners = function () {
        var _this = this;
        // SHOW COMMENT BUTTONS
        var commentBtns = document.querySelectorAll('.card-open-comments');
        this.showComments(commentBtns);
        // CART BUTTON
        var cartBtn = document.getElementById('cartBtn');
        cartBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('cart').style.display = document.getElementById('cart').style.display === "none" ? "flex" : "none";
        });
        // ADD TO CART BUTTONS
        var addToCartBtns = document.querySelectorAll('.addToCartBtn');
        for (var _i = 0, addToCartBtns_1 = addToCartBtns; _i < addToCartBtns_1.length; _i++) {
            var btn = addToCartBtns_1[_i];
            btn.addEventListener('click', function (e) {
                // MAKE ISINCART TRUE
                _this.food[parseInt(e.target.attributes["target"].value) - 1].isInCart = true;
                _this.food[parseInt(e.target.attributes["target"].value) - 1].quantity += 1;
                _this.displayCartItems();
            });
        }
        // CLOSE CART BUTTON / REMOVE ITEM BUTTON
        document.getElementById('cart').addEventListener('click', function (e) {
            // GET CLOSECARTBTN BASED ON ID
            if (e.target["id"] === "closeCartBtn") {
                // CHANGE THE DISPLAY FROM THE CART TO NONE
                document.getElementById('cart').style.display = "none";
                // IF THE EVENT TARGET IS THE REMOVE BUTTON
            }
            else if (e.target.className === "removeBtn") {
                // CHANGE THE QUANTITY IN THE FOOD ARRAY BASED ON TARGETID
                if (_this.food[parseInt(e.target.attributes["target"].value) - 1].quantity <= 1) {
                    // CHANGE THE ISINCART TO FALSE IF ITS 0
                    _this.food[parseInt(e.target.attributes["target"].value) - 1].isInCart = false;
                }
                // QUANTITY -- IF ITS OVER 0
                _this.food[parseInt(e.target.attributes["target"].value) - 1].quantity--;
                // DISPLAY CART ITEMS ONCE MORE
                _this.displayCartItems();
            }
        });
    };
    Restaurant.prototype.showComments = function (buttons) {
        var _loop_1 = function (button) {
            button.addEventListener('click', function (e) {
                if (button.parentNode.children[2].className === "card-comments") {
                    button.parentNode.children[2].style.display = button.parentNode.children[2].style.display === "block" ? "none" : "block";
                }
                else {
                    alert("no comments there");
                }
            });
        };
        for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
            var button = buttons_1[_i];
            _loop_1(button);
        }
    };
    Restaurant.prototype.displayCartItems = function () {
        var newArr = this.food.filter(function (x) { return x.isInCart; });
        var output = document.getElementById('cart');
        output.innerHTML = "";
        this.total = 0;
        for (var _i = 0, newArr_1 = newArr; _i < newArr_1.length; _i++) {
            var item = newArr_1[_i];
            this.total += (parseFloat(item.price) * parseFloat(item.quantity));
            output.innerHTML +=
                "\n            <div key=\"" + item.id + "\">\n                <p>" + item.name + "</p>\n                <p>" + item.quantity + "</p>\n                <small>" + parseFloat(item.price.toFixed(2)) * parseFloat(item.quantity.toFixed(2)) + "&euro;</small>\n                <button target=\"" + item.id + "\" class=\"removeBtn\">Remove</>\n            </div>\n            ";
        }
        output.innerHTML +=
            "\n        <hr>\n        <p>Total : " + this.total.toFixed(2) + "&euro;</p>\n        <button id=\"closeCartBtn\">Close</button>\n        ";
        return newArr;
    };
    return Restaurant;
}());
var restaurant = new Restaurant(data);
