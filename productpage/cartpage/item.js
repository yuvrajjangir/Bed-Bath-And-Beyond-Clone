var itemdetail = JSON.parse(localStorage.getItem("itemDetails"));
console.log(itemdetail);

display(itemdetail);

function display(item) {
    var parent = document.querySelector(".detailsdiv");
    parent.innerHTML = "";

    var div = document.createElement("div");

    var imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    var mainimg = document.createElement("img");
    mainimg.setAttribute("src", item.imageURL1);
    mainimg.setAttribute("alt", "item.name");

    var mainimgDiv = document.createElement("div");
    mainimgDiv.setAttribute("class", "main-img");
    mainimgDiv.appendChild(mainimg);

    var firstimg = document.createElement("div");
    firstimg.setAttribute("class", "firstimg");
    firstimg.appendChild(mainimgDiv);
    imgContainer.appendChild(firstimg);

    var imgDiv1 = createImageDiv(item.imageURL1);
    var imgDiv2 = createImageDiv(item.imageURL2);
    var imgDiv3 = createImageDiv(item.imageURL3);
    var imgDiv4 = createImageDiv(item.imageURL4);
    var imgDiv5 = createImageDiv(item.imageURL5);

    var secimg = document.createElement("div");
    secimg.setAttribute("class", "secimg");

    for (var i = 1; i <= 5; i++) {
        var imgDiv = createImageDiv(item["imageURL" + i]);
        secimg.appendChild(imgDiv);
        imgContainer.appendChild(secimg);
    }

    var addtocart = document.createElement("button");
    addtocart.setAttribute("class","addtocart");
    addtocart.textContent = "Add to Cart";
    addtocart.addEventListener("click", function () {
        var selectedQuantity = parseInt(quantitySelect.value);
        var itemObj = {
            imageURL1: item.imageURL1,
            name: item.name,
            sale: item.sale,
            color : item.color,
            freeship: item.freeship,
            price: parseInt(item.price),
            quantity: selectedQuantity,
        };

        localStorage.setItem("cartItem", JSON.stringify(itemObj));
        alert("item added to cart");
    });

    var divone = document.createElement("div");
    divone.setAttribute("class", "otherdata");

    var h3 = document.createElement("h3");
    h3.textContent = item.sale;

    var brands = document.createElement("p");
    brands.textContent = item.brand;

    var pricedata = document.createElement("p");
    pricedata.textContent = item.price;

    var ship = document.createElement("p");
    ship.textContent = item.shipping;

    var namePriceDiv = document.createElement("p");
    namePriceDiv.textContent = item.name;


    var wishlistButton = document.createElement("button");
wishlistButton.setAttribute("class", "wishlist");
var wishlistImg = document.createElement("img");
wishlistImg.setAttribute("src", "https://cdn-icons-png.flaticon.com/128/833/833472.png");
wishlistButton.appendChild(wishlistImg);


wishlistButton.addEventListener("click", function () {
    var itemObj = {
        imageURL1: item.imageURL1,
        name: item.name,
        sale: item.sale,
        color : item.color,
        freeship: item.shipping,
        price: parseInt(item.price),
    };
    var wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    wishlistItems.push(itemObj);
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    window.location.href = "./productpage/product.html";
});

var quantityLabel = document.createElement("label");
quantityLabel.textContent = "Quantity: ";

var quantitySelect = document.createElement("select");
quantitySelect.setAttribute("class", "quantity-select");
for (var i = 1; i <= 10; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    quantitySelect.appendChild(option);
}

var quantityDiv = document.createElement("div");
quantityDiv.setAttribute("class", "quantity-div");
quantityDiv.append(quantityLabel, quantitySelect);



    var sizediv = document.createElement("div");
    sizediv.classList.add("size-buttons");

    

    var but = document.createElement("button");
    but.textContent = "Color :";

    

         var button = document.createElement("button");
        button.textContent = item.color;
        button.classList.add("size-button");
       
        sizediv.append(button); 
    

    var allsize = document.createElement("div");
    allsize.setAttribute("class","allsize");
    allsize.append(but,sizediv);

    var shopping = document.createElement("div");
    shopping.setAttribute("class","shopping");
    shopping.append( wishlistButton,addtocart);

    divone.append(namePriceDiv, brands, h3, pricedata, ship,allsize,quantityDiv,shopping );

    div.append(imgContainer, divone);

    parent.append(div);
}


function createImageDiv(imageUrl) {
    var img = document.createElement("img");
    img.setAttribute("class", "img-img");
    img.setAttribute("src", imageUrl);
    img.setAttribute("alt", "item.name");

    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv");
    imgDiv.appendChild(img);

    img.addEventListener("click", function () {
        switchMainImage(imageUrl);
    });

    return imgDiv;
}
function switchMainImage(imageUrl, altText) {
    var mainImg = document.querySelector(".main-img img");
    mainImg.setAttribute("src", imageUrl);
    mainImg.classList.add("main-img");
}