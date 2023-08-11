// Function to show the fall-down popup message
function showFallDownPopup(message) {
    // Create a new popup element
    var popup = document.createElement("div");
    popup.classList.add("popup", "show");
    popup.innerText = message;

    // Append the popup to the body
    document.body.appendChild(popup);

    // Remove the popup after a certain time (e.g., 3 seconds)
    setTimeout(function() {
        document.body.removeChild(popup);
    }, 3000);
}

// Function to validate and store the input values in localStorage
function validateAndStore() {
    // Validate the required fields
    var email = document.getElementById("email").value;
    var firstName = document.getElementById("name").value;
    var lastName = document.getElementById("last").value;
    var address1 = document.getElementById("add1").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var zipCode = document.getElementById("zip").value;
    var phoneNumber = document.getElementById("mob").value;

    // Check if required fields are empty
    if (!email || !firstName || !lastName || !address1 || !country || !city || !zipCode || !phoneNumber) {
        showFallDownPopup("Please fill in all the required fields.");
        return;
    }

    // Check if phone number has exactly 10 digits
    if (phoneNumber.length !== 10) {
        showFallDownPopup("Phone number should have exactly 10 digits.");
        return;
    }

    // Create a new address object
    var address = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        address1: address1,
        country: country,
        city: city,
        zipCode: zipCode,
        phoneNumber: phoneNumber
    };

    // Retrieve existing addresses from local storage (if any)
    var storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];

    // Add the new address to the array
    storedAddresses.push(address);

    // Store the updated array back in local storage
    localStorage.setItem("addresses", JSON.stringify(storedAddresses));

    // Redirect to the payment page
    window.location.href = './payment.html';
}

// Attach the validateAndStore function to the "Place order" button click event
document.getElementById("placeorderAddress").addEventListener("click", validateAndStore);
// Function to show/hide payment fields based on the selected payment mode
function showPaymentFields() {
    var paymentMode = document.getElementById("payment-mode").value;
    var creditDebitFields = document.getElementById("credit-debit");
    var netBankingFields = document.getElementById("netbanking");

    // Hide both payment method fields initially
    creditDebitFields.style.display = "none";
    netBankingFields.style.display = "none";

    if (paymentMode === "credit-debit") {
        creditDebitFields.style.display = "block";
    } else if (paymentMode === "netbanking") {
        netBankingFields.style.display = "block";
    }
}

// Call the showPaymentFields function initially to handle the default state
showPaymentFields();