function placeOrder() {
    var flavor1 = document.getElementById("flavor1").value;
    var flavor2 = document.getElementById("flavor2").value;
    var flavor3 = document.getElementById("flavor3").value;

    var totalPrice = calculateTotalPrice(flavor1, flavor2, flavor3);

    var orderResultElement = document.getElementById("orderResult");

    if (flavor1 === flavor2 && flavor2 === flavor3) {
        orderResultElement.innerText = `Your order for blended juice has been placed successfully. Pay ${totalPrice} shillings`;
    } else {
        orderResultElement.innerText = `Your order for ${flavor1}, ${flavor2}, and ${flavor3} has been placed successfully. Pay ${totalPrice} shillings`;
    }
}

function calculateTotalPrice(flavor1, flavor2, flavor3) {
    // Add your pricing logic here based on selected flavors
    // For simplicity, let's assume each flavor costs 5 shillings
    var pricePerFlavor = 5;

    return pricePerFlavor * 3; // Total price for three flavors
}
