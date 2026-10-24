const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");

async function searchProducts() {

    const text = searchInput.value.trim().toLowerCase();

    if (text === "") {
        searchResults.innerHTML = `
            <p class="no-results">Please enter a product name.</p>
        `;
        return;
    }

    try {

        const response = await fetch("https://fakestoreapi.com/products");

        const products = await response.json();

        const results = products.filter(product =>
            product.title.toLowerCase().includes(text)
        );

        searchResults.innerHTML = "";

        if (results.length === 0) {
            searchResults.innerHTML = `
                <p class="no-results">
                    No products found.
                </p>
            `;
            return;
        }

        results.forEach(product => {

            searchResults.innerHTML += `
                <div class="search-card">

                    <img src="${product.image}" alt="${product.title}">

                    <h3>${product.title}</h3>

                    <p>$${product.price}</p>

                </div>
            `;

        });

    } catch (error) {

        console.log(error);

        searchResults.innerHTML = `
            <p class="no-results">
                Something went wrong.
            </p>
        `;
    }
}

searchBtn.addEventListener("click", searchProducts);

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchProducts();
    }

});