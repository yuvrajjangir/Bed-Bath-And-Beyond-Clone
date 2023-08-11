document.addEventListener("DOMContentLoaded", function () {
    const paymentOptions = document.querySelectorAll(".payment-option");
    const paymentMethodRadios = document.querySelectorAll("[name='paymentMethod']");
    const placeOrderButton = document.getElementById("placeOrderButton");

    paymentMethodRadios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            // Hide all payment options
            paymentOptions.forEach(function (option) {
                option.classList.add("hidden");
            });

            // Show the selected payment option
            const selectedValue = this.value;
            const selectedOption = document.getElementById(selectedValue);
            selectedOption.classList.remove("hidden");
        });
    });

    placeOrderButton.addEventListener("click", function () {
        // Perform the final order processing here based on the selected payment method and details
        const selectedPaymentMethod = document.querySelector("[name='paymentMethod']:checked");
        if (selectedPaymentMethod) {
            const selectedValue = selectedPaymentMethod.value;
            console.log("Selected Payment Method: " + selectedValue);
            // Additional logic for processing the payment based on the selected method
            // ...
        } else {
            console.log("Please select a payment method.");
        }
    });
});