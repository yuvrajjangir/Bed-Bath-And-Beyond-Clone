// Function to check if a value is empty
function isEmpty(value) {
    return value.trim() === "";
}
// Function to check if a phone number has exactly 10 digits
function isValidPhoneNumber(value) {
    var phoneNumber = value.trim();
    return phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
}
// Function to validate the form
function validateForm() {
    // Get input values for billing address
    var billingEmail = document.getElementById("email").value;
    var billingFirstName = document.getElementById("firstName").value;
    var billingLastName = document.getElementById("lastName").value;
    var billingCompany = document.getElementById("company").value;
    var billingTaxId = document.getElementById("taxId").value;
    var billingAddress1 = document.getElementById("address1").value;
    var billingAddress2 = document.getElementById("address2").value;
    var billingCountry = document.getElementById("country").value;
    var billingCity = document.getElementById("city").value;
    var billingState = document.getElementById("state").value;
    var billingZipcode = document.getElementById("zipcode").value;
    var billingPhone = document.getElementById("phone").value;

    // Get input values for shipping address
    var shippingEmail = document.getElementById("email2").value;
    var shippingFirstName = document.getElementById("firstName2").value;
    var shippingLastName = document.getElementById("lastName2").value;
    var shippingCompany = document.getElementById("company2").value;
    var shippingTaxId = document.getElementById("taxId2").value;
    var shippingAddress1 = document.getElementById("address12").value;
    var shippingAddress2 = document.getElementById("shipping_address22").value;
    var shippingCountry = document.getElementById("country2").value;
    var shippingCity = document.getElementById("city2").value;
    var shippingState = document.getElementById("state2").value;
    var shippingZipcode = document.getElementById("zipcode2").value;
    var shippingPhone = document.getElementById("phone2").value;
    // Check if any required fields in billing address are empty
    if (
        isEmpty(billingEmail) ||
        isEmpty(billingFirstName) ||
        isEmpty(billingLastName) ||
        isEmpty(billingAddress1) ||
        isEmpty(billingCountry) ||
        isEmpty(billingCity) ||
        isEmpty(billingZipcode) ||
        isEmpty(billingPhone) 
    ) {
        // Show alert for empty fields
        showFallDownPopup("Please fill in all required fields in the billing address.");
        return false;
    }

    // Check if any required fields in shipping address are empty
if (
    isEmpty(shippingEmail) ||
    isEmpty(shippingFirstName) ||
    isEmpty(shippingLastName) ||
    isEmpty(shippingAddress1) ||
    isEmpty(shippingCountry) ||
    isEmpty(shippingCity) ||
    isEmpty(shippingZipcode) ||
    isEmpty(shippingPhone)
) {
    // Show alert for empty fields
    showFallDownPopup("Please fill in all required fields in the shipping address.");
    return false;
}
if (!isValidPhoneNumber(billingPhone)) {
    // Show alert for invalid phone number in billing address
    showFallDownPopup("Phone number in billing address must be exactly 10 digits.");
    return false;
}

if (!isValidPhoneNumber(shippingPhone)) {
    // Show alert for invalid phone number in shipping address
    showFallDownPopup("Phone number in shipping address must be exactly 10 digits.");
    return false;
}

    // Form is valid
    return true;
}

// Function to show a popup message
function showFallDownPopup(message) {
    // Create a new popup element
    var popup = document.createElement("div");
    popup.classList.add("popup", "show");
    popup.innerText = message;

    // Append the popup to the body
    document.body.appendChild(popup);

    // Remove the popup after a certain time (e.g., 3 seconds)
    setTimeout(function () {
        document.body.removeChild(popup);
    }, 3000);
}

// Event listener for the submit button
document.getElementById("submitbutton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    if (validateForm()) {
        // Get address data for billing and shipping
        var billingData = {
            email: document.getElementById("email").value,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            company: document.getElementById("company").value,
            taxId: document.getElementById("taxId").value,
            address1: document.getElementById("address1").value,
            address2: document.getElementById("address2").value,
            country: document.getElementById("country").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            zipcode: document.getElementById("zipcode").value,
            phone: document.getElementById("phone").value,
            // Add other billing fields as needed
        };
        var shippingData = {
            email: document.getElementById("email2").value,
            firstName: document.getElementById("firstName2").value,
            lastName: document.getElementById("lastName2").value,
            company: document.getElementById("company2").value,
            taxId: document.getElementById("taxId2").value,
            address1: document.getElementById("address12").value,
            address2: document.getElementById("shipping_address22").value,
            country: document.getElementById("country2").value,
            city: document.getElementById("city2").value,
            state: document.getElementById("state2").value,
            zipcode: document.getElementById("zipcode2").value,
            phone: document.getElementById("phone2").value,
            // Add other shipping fields as needed
        };

        // Store address data in local storage or process it as needed
        localStorage.setItem("billingData", JSON.stringify(billingData));
        localStorage.setItem("shippingData", JSON.stringify(shippingData));

        // Show success message or perform further actions
        alert("Form submitted successfully!");
    }
});
document.getElementById("proceed-button").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default button action
    if (!validateForm()) {
        // Show alert for incomplete form
        showFallDownPopup("Please fill in all required fields before proceeding to payment.");
    } else {
        // Form is valid, proceed to payment
        // Store data in local storage
        var paymentData = {
            cardType: document.getElementById("card_type").value,
            cardholderName: document.getElementById("name").value,
            expDate: document.getElementById("exp_date").value,
            cvv: document.getElementById("cvv").value,
        };

        // Save payment information to local storage
        localStorage.setItem("paymentData", JSON.stringify(paymentData));

        window.location.href = "./otp.html";
        
    }
});
