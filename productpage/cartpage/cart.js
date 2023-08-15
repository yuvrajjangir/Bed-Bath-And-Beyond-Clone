var cart = JSON.parse(localStorage.getItem("cartItem")) || [];
var left = document.getElementById("left");
var right = document.getElementById("right");

function display(cart) {
    left.innerHTML = "";
    cart.forEach(function (item, index) {
        let div = document.createElement("div");
        let div1 = document.createElement("div");

        let image = document.createElement("img");
        image.src = item.imageURL1;

        let name = document.createElement("p");
        name.innerText = item.name;
        name.id = "name";

        let price = document.createElement("h2");
        price.innerText = `Sale INR ${item.price}`;
        price.style.color = "rgb(172, 27, 37)";
        price.style.marginLeft = "30px";

        let quantity = document.createElement("p");
        quantity.innerText = `Quantity: ${item.quantity}`;

        let remove = document.createElement("u");
        remove.innerText = "Remove";
        remove.id = "remove";
        remove.addEventListener("click", function () {
            removeItem(index);
        });

        div1.append(name, price, quantity, remove);
        div.append(image, div1);

        left.append(div);
    });
}

display(cart);

function addItemToCart(itemObj, quantity) {
    // Check if the item is already in the cart based on some unique identifier (e.g., item ID)
    const existingItemIndex = cart.findIndex((item) => item.itemId === itemObj.itemId);

    if (existingItemIndex !== -1) {
        // Item already in cart, update the quantity
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Item not in cart, add it
        itemObj.quantity = quantity;
        cart.push(itemObj);
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
    display(cart);
    displayTotal();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    display(cart);
    displayTotal();
}

function displayTotal() {
    right.innerHTML = "";
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }

    let show = document.createElement("h2");
    show.innerText = `Your Total: INR ${total}`;
    show.id = "showTotal";

    let checkOut = document.createElement("button");
    checkOut.id = "check_out";
    checkOut.innerText = "Check Out";

    checkOut.addEventListener("click", function () {
        checkout();
    });

    right.append(show, checkOut);
}

var token = localStorage.getItem("token");

function checkout() {
    if (token != null) {
        window.location.href = "checkout.html";
    } else {
        window.location.href = "signup.html";
    }
}

displayTotal();