document.addEventListener("DOMContentLoaded", function () {
    var wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    var wishlistItemsContainer = document.getElementById("wishlistItems");
    var wishlistCount = document.getElementById("wishlistCount");

    updateWishlistCount();

    // Function to update the wishlist count
    function updateWishlistCount() {
        wishlistCount.textContent = `${wishlistItems.length}`;
    }
  

    // Iterate through wishlist items and create HTML elements
    wishlistItems.forEach(function (item) {
        var listItem = document.createElement("div");
        listItem.innerHTML = `
          <img src="${item.imageURL1}" alt="${item.name}"> 
          <h2>${item.name}</h2>
          <p>Color: ${item.color}</p>
          <p>Price: ${item.price}</p>
          
            <button class="remove-button">Remove</button>
            <button class="addbag-button">Add To Bag</button>
            
        `;
// add to bag
//         var addbagButton = listItem.querySelector(".addbag-button");
//         addbagButton.addEventListener("click", function () {
            
//             localStorage.setItem("cartItem", JSON.stringify(wishlistItems));
// window.location.href ="../cartpage/cartItem";
//         });

        var removeButton = listItem.querySelector(".remove-button");
        removeButton.addEventListener("click", function () {
            // Remove item from wishlist
            wishlistItems = wishlistItems.filter(function (wishlistItem) {
                return wishlistItem.name !== item.name;
            });

            // Update local storage
            localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));

            // Update wishlist count
            updateWishlistCount();

            // Remove item from DOM
            wishlistItemsContainer.removeChild(listItem);
        });

        wishlistItemsContainer.appendChild(listItem);
    });
});
