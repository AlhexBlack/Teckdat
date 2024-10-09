let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function addToCart(product) {
    const itemIndex = cartItems.findIndex(item => item.name === product.name);

    if (itemIndex === -1) {
        cartItems.push({
            name: product.name,
            price: product.price,
            imgSrc: product.image,
            quantity: 1
        });
    } else {
        cartItems[itemIndex].quantity += 1;
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCart();
    loadCart();
});

function updateCart() {
    const cartCount = document.querySelector('#cart-count');
    let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    cartCount.style.backgroundColor = totalItems >= 1 ? "#f9410a" : "";
}

function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    let totalPrice = 0;

    cartItemsContainer.innerHTML = ''; // Clear the container to avoid duplicates

    cartItems.forEach((item, index) => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <div class="cartImg"><img src="${item.imgSrc}" alt="${item.name}" class="cart-item-image"></div>
            <div class="cart-item-details">
                <p>${item.name}</p>
                <p>₦${item.price}</p>
                <p>Quantity: 
                    <button class="decrease-btn" data-index="${index}">-</button>
                    <span class="item-quantity">${item.quantity}</span>
                    <button class="increase-btn" data-index="${index}">+</button>
                </p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `${totalPrice}`;
    updateCheckoutButton();
    attachButtonEvents(); // Attach events after rendering the cart
}

function attachButtonEvents() {
    document.querySelectorAll('.increase-btn').forEach(button => {
        button.removeEventListener('click', increaseQuantityHandler); // Prevent multiple bindings
        button.addEventListener('click', increaseQuantityHandler);
    });

    document.querySelectorAll('.decrease-btn').forEach(button => {
        button.removeEventListener('click', decreaseQuantityHandler);
        button.addEventListener('click', decreaseQuantityHandler);
    });

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.removeEventListener('click', removeFromCartHandler);
        button.addEventListener('click', removeFromCartHandler);
    });
}

function increaseQuantityHandler(e) {
    const index = e.target.dataset.index;
    increaseQuantity(index);
}

function decreaseQuantityHandler(e) {
    const index = e.target.dataset.index;
    decreaseQuantity(index);
}

function removeFromCartHandler(e) {
    const index = e.target.dataset.index;
    removeFromCart(index);
}

function increaseQuantity(index) {
    cartItems[index].quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    const quantityElement = document.querySelectorAll('.item-quantity')[index];
    quantityElement.textContent = cartItems[index].quantity;

    loadTotalPrice();
    updateCart();
}

function decreaseQuantity(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        const quantityElement = document.querySelectorAll('.item-quantity')[index];
        quantityElement.textContent = cartItems[index].quantity;

        loadTotalPrice();
        updateCart();
    }
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCart();
    updateCart();
}

function loadTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    totalPriceElement.textContent = `₦${totalPrice}`;
}

function updateCheckoutButton() {
    const checkoutButton = document.getElementById('checkout-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (cartItems.length === 0) {
        checkoutButton.disabled = true;
        checkoutButton.style.backgroundColor = 'grey';
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else if (isLoggedIn !== 'true') {
        checkoutButton.disabled = true;
        checkoutButton.style.backgroundColor = 'grey';
        checkoutButton.textContent = 'Login to Checkout';
    } else {
        checkoutButton.disabled = false;
        checkoutButton.style.backgroundColor = '';
        checkoutButton.textContent = 'Checkout';
    }

    checkoutButton.addEventListener('click', function () {
        if (isLoggedIn !== 'true') {
            window.location.href = '/pages/login.html';
        } else {
            window.location.href = '/pages/checkout.html';
        }
    });
}

document.addEventListener('DOMContentLoaded', loadCart);
