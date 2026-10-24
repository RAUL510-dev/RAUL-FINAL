// ===========================
// PRODUCT DETAILS SYSTEM
// ===========================


// Quantity

let quantity = 1;


const quantityText = document.getElementById("quantity");

const plusBtn = document.getElementById("plus");

const minusBtn = document.getElementById("minus");



plusBtn.addEventListener("click",()=>{


    quantity++;

    quantityText.innerText = quantity;


});



minusBtn.addEventListener("click",()=>{


    if(quantity > 1){

        quantity--;

    }


    quantityText.innerText = quantity;


});





// Product data


const product = {


    id:1,

    name:"Gaming Controller",

    price:95,

    image:"images/product1.png",

    quantity:1


};






// ===========================
// ADD TO CART
// ===========================


const cartBtn = document.getElementById("cartBtn");


cartBtn.addEventListener("click",()=>{


    let cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];



    const newProduct = {


        ...product,

        quantity:quantity


    };




    const exists = cart.find(
        item => item.id === product.id
    );



    if(exists){


        exists.quantity += quantity;


    }

    else{


        cart.push(newProduct);


    }





    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );




    alert("Product added to cart");


});







// ===========================
// WISHLIST
// ===========================



const wishBtn = document.getElementById("wishBtn");



wishBtn.addEventListener("click",()=>{


    let wishlist = JSON.parse(

        localStorage.getItem("wishlist")

    ) || [];





    const exists = wishlist.find(

        item => item.id === product.id

    );




    if(exists){


        alert("Already in wishlist");

        return;

    }




    wishlist.push(product);



    localStorage.setItem(

        "wishlist",

        JSON.stringify(wishlist)

    );




    alert("Added to wishlist");


});







// ===========================
// BUY NOW
// ===========================


const buyBtn = document.getElementById("buyBtn");



buyBtn.addEventListener("click",()=>{


    localStorage.setItem(

        "buyProduct",

        JSON.stringify({

            ...product,

            quantity:quantity

        })

    );



    window.location.href="checkout.html";


});