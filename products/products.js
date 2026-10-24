// ===========================
// PRODUCTS SYSTEM
// ===========================


// Products data
const products = [

    {
        id:1,
        name:"Playstation 5",
        price:850,
        image:"https://storage.irshad.az/products/resized/zmxX8pXq8PansiMuKCX3D87sKTILnx7Q9YdL7l14.png"
    },

    {
        id:2,
        name:"Headphones",
        price:200,
        image:"https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/rt:fill/w:512/plain/s3://cms/product/d7/4c/d74c2626e6c1935be8a07aa7a2b1893c/260331160043467069.webp"
    },

    {
        id:3,
        name:"iPhone 15 Pro",
        price:1000,
        image:"https://assets.smartelectronics.az/Assets/cdn-cgi?path=acffecaa-7b95-45b6-8bdb-680847105f19.png"
    },

    {
        id:4,
        name:"SmartWatch",
        price:80,
        image:"https://help.apple.com/assets/692F45642C5AEF37BA06084A/692F4568B3C902EE690E2EBC/en_US/743fe2a3e8611c67bbe14af9e60c76e9.png"
    }

];





// ===========================
// ADD TO CART
// ===========================


const cartButtons = document.querySelectorAll(".add-cart");


cartButtons.forEach((button,index)=>{


    button.addEventListener("click",()=>{


        let cart = JSON.parse(
            localStorage.getItem("cart")
        ) || [];



        const product = products[index];



        const exists = cart.find(item=>item.id === product.id);



        if(exists){

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






// ===========================
// WISHLIST
// ===========================


const wishlistButtons = document.querySelectorAll(".wishlist-btn");



wishlistButtons.forEach((button,index)=>{


    button.addEventListener("click",()=>{


        let wishlist = JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];



        const product = products[index];



        const exists = wishlist.find(
            item=>item.id === product.id
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


});