let cartCount = 0;
let cartItems = [];

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    cartCount++;
    document.getElementById('cart-count').innerText = `${cartCount}`;
}