// ===========================
// HOME ADD TO CART
// ===========================

const cartButtons = document.querySelectorAll(".add-cart");

const products = [

    {
        id: 1,
        name: "Gaming Controller",
        price: 95,
        image: "https://eu.aimcontrollers.com/wp-content/uploads/2024/10/PRO_4-1.png"
    },

    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 120,
        image: "https://www.fingers.co.in/secure/api/image-tool/index.php?src=https://www.fingers.co.in/secure/api/uploads/products/1777798295_6.png&w=500&h=500&zc=2"
    },

    {
        id: 3,
        name: "Monitor",
        price: 300,
        image: "https://storage.irshad.az/products/resized/5P8SjGyie3xlefa2BmcKknwUWiyrew302s5Q2dGd.png"
    },

];


// ===========================
// ADD TO CART
// ===========================

cartButtons.forEach(button => {

    button.addEventListener("click", function () {

        const id = Number(button.dataset.id);

        const product = products.find(
            item => item.id === id
        );

        let cart = JSON.parse(
            localStorage.getItem("cart")
        ) || [];


        const exists = cart.find(
            item => item.id === product.id
        );


        if (exists) {

            alert("Product already in cart");

            return;

        }


        cart.push(product);


        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );


        alert("Added to cart");

    });

});