// ===========================
// CART SYSTEM
// ===========================

const cartItems = document.getElementById("cartItems");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Məhsulları göstər
function displayCart() {

    cartItems.innerHTML = "";

    let totalPrice = 0;

    if(cart.length === 0){

        cartItems.innerHTML = `
        <tr>
            <td colspan="5" style="text-align:center;">
                Your cart is empty
            </td>
        </tr>
        `;

        subtotal.innerText = "$0";
        total.innerText = "$0";
        return;
    }

    cart.forEach((product,index)=>{

        const quantity = product.quantity || 1;
        const itemTotal = product.price * quantity;

        totalPrice += itemTotal;

        cartItems.innerHTML += `

        <tr>

            <td>

                <img src="${product.image}" width="60">

                ${product.name}

            </td>

            <td>

                $${product.price}

            </td>

            <td>

                ${quantity}

            </td>

            <td>

                $${itemTotal}

            </td>

            <td>

                <button class="remove-btn" onclick="removeProduct(${index})">

                    Remove

                </button>

            </td>

        </tr>

        `;

    });

    subtotal.innerText = "$" + totalPrice;
    total.innerText = "$" + totalPrice;

}



// Məhsulu sil
function removeProduct(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}


// İlk dəfə yüklənəndə
displayCart();