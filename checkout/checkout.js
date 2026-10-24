// ===========================
// CHECKOUT SYSTEM
// ===========================

const checkoutItems = document.getElementById("checkoutItems");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");
const checkoutForm = document.getElementById("checkoutForm");
const placeOrder = document.getElementById("placeOrder");

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ===========================
// SHOW PRODUCTS
// ===========================

function showProducts(){

    checkoutItems.innerHTML = "";

    let totalPrice = 0;

    if(cart.length === 0){

        checkoutItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        subtotal.innerText = "$0";
        total.innerText = "$0";

        return;

    }


    cart.forEach(product=>{

        const quantity = product.quantity || 1;

        const itemTotal = product.price * quantity;

        totalPrice += itemTotal;

        checkoutItems.innerHTML += `

            <div class="checkout-item">

                <div style="display:flex;align-items:center;gap:15px;">

                    <img src="${product.image}" alt="${product.name}">

                    <span>${product.name}</span>

                </div>

                <span>$${itemTotal}</span>

            </div>

        `;

    });

    subtotal.innerText = "$" + totalPrice;
    total.innerText = "$" + totalPrice;

}

showProducts();



// ===========================
// PLACE ORDER
// ===========================

placeOrder.addEventListener("click",function(e){

    e.preventDefault();

    const formData = new FormData(checkoutForm);

    const order = {

        name:formData.get("name"),
        company:formData.get("company"),
        address:formData.get("address"),
        city:formData.get("city"),
        phone:formData.get("phone"),
        email:formData.get("email"),
        products:cart

    };


    if(
        order.name === "" ||
        order.address === "" ||
        order.city === "" ||
        order.phone === "" ||
        order.email === ""
    ){

        alert("Please fill all required fields.");

        return;

    }


    localStorage.setItem(
        "lastOrder",
        JSON.stringify(order)
    );


    localStorage.removeItem("cart");


    alert("Order placed successfully!");


    window.location.href = "../home/home.html";

});