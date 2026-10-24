// ===========================
// WISHLIST SYSTEM
// ===========================

const wishlistItems = document.getElementById("wishlistItems");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


// ===========================
// SHOW PRODUCTS
// ===========================

function displayWishlist(){

    wishlistItems.innerHTML = "";

    if(wishlist.length === 0){

        wishlistItems.innerHTML = `
            <h2 class="empty">
                Your Wishlist is Empty
            </h2>
        `;

        return;

    }


    wishlist.forEach((product,index)=>{

        wishlistItems.innerHTML += `

        <div class="wishlist-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="wishlist-info">

                <h3>${product.name}</h3>

                <p>$${product.price}</p>

                <div class="wishlist-buttons">

                    <button class="cart-btn"
                    onclick="moveToCart(${index})">

                        Move To Cart

                    </button>

                    <button class="remove-btn"
                    onclick="removeWishlist(${index})">

                        Remove

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}



// ===========================
// REMOVE
// ===========================

function removeWishlist(index){

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    displayWishlist();

}



// ===========================
// MOVE TO CART
// ===========================

function moveToCart(index){

    let cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    const product = wishlist[index];

    const exists = cart.find(item => item.id === product.id);

    if(!exists){

        cart.push(product);

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert("Product moved to cart!");

    displayWishlist();

}



// ===========================
// START
// ===========================

displayWishlist();