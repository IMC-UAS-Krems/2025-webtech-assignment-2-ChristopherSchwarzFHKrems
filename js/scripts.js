let cartCount = 0;

const cartBadge = document.getElementById("cart-count");
// https://www.w3schools.com/jsref/met_document_queryselector.asp
const addToCartButtons = document.querySelectorAll(".add-to-cart");

//https://stackoverflow.com/questions/3559070/are-there-dictionaries-in-javascript-like-python
let cartItems = [];

addToCartButtons.forEach(button => {
    // () => short for function()
    button.addEventListener("click", () => {
        cartCount++;
        cartBadge.textContent = cartCount;
        cartBadge.style.display = "inline-block";

        const cardBody = button.closest(".card-body");
        const title = cardBody.querySelector(".card-title").textContent;
        const priceText = cardBody.querySelector(".price").textContent;
        const price = parseFloat(priceText.replace("€", ""));

        cartItems.push({ title,price });

        console.log(cartItems)
    });
});

// definition of buttons
const checkoutBtn = document.getElementById("checkout-btn");
const continueShipping = document.getElementById("continue-shipping-btn");

const conformationDetails = document.getElementById("conformation-details")
const shopContent = document.getElementById("shop-content");
const checkoutForm = document.getElementById("checkout-form");

// show and hide
checkoutBtn.addEventListener("click", () => {
    shopContent.style.display = "none";
    checkoutForm.style.display = "block";
    
})

// variables to display in the last page
const cartItemsDiv = document.getElementById("cart-items");
const cartPricesDiv = document.getElementById("cart-prices");

const subtotalDiv = document.getElementById("subtotal");
const taxDiv = document.getElementById("tax");
const discountDiv = document.getElementById("discount");
const totalDiv = document.getElementById("total");


// display the last page
continueShipping.addEventListener("click", () => {
    checkoutForm.style.display = "none";
    conformationDetails.style.display = "block";

    cartItemsDiv.innerHTML = "<strong>Product</strong><hr>";
    cartPricesDiv.innerHTML = "<strong>Price</strong><hr>";

    let subtotal = 0;
    // iterating through the dictio0nary
    cartItems.forEach(item => {
            const productDiv = document.createElement("div");
            productDiv.textContent = item.title;
            cartItemsDiv.appendChild(productDiv);

            const priceDiv = document.createElement("div");
            priceDiv.textContent = item.price;
            cartPricesDiv.appendChild(priceDiv);

            subtotal += item.price;
        });
    //calculations for last page
    const tax = subtotal * 0.20;
    // ? = if that then that
    const discount = cartItems.length >= 3 ? subtotal * 0.10 : 0;
    const total = subtotal + tax - discount;
    subtotalDiv.textContent = subtotal;
    taxDiv.textContent = tax.toFixed(2);
    discountDiv.textContent = discount.toFixed(2);
    totalDiv.textContent = total.toFixed(2);
})



const form = document.getElementById("form1");

//https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const zip = form.querySelector("input[placeholder='ZIP']").value.trim();
    const phone = form.querySelector("input[placeholder='Phone']").value.trim();

    let messages = [];
    // checks if valid
    if (zip && !/^\d{1,6}$/.test(zip)) {
        messages.push("ZIP-Code must be numeric and max 6 digits.");
    }

    if (phone && !/^\d{1,15}$/.test(phone)) {
        messages.push("Phone number must be numeric and max 15 digits.");
    }

    if (messages.length > 0) {
        alert(messages.join("\n"));
        return;
    }
    // if everything works, show order confirmed
    alert("Order confirmed")

});





