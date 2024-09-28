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

    if (totalItems >= 1){
        cartCount.style.backgroundColor = "#f9410a";
    }
}

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty.</p>';
        checkoutBtn.disabled = true;
        checkoutBtn.style.backgroundColor = 'gray';
        checkoutBtn.style.cursor = 'not-allowed';
    } else {
        checkoutBtn.disabled = false;
        checkoutBtn.style.backgroundColor = '';
        checkoutBtn.style.cursor = '';

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <div class= cartImg><img src="${item.imgSrc}" alt="${item.name}" class="cart-item-image"></div>
            <div class="cart-item-details">
                <p>${item.name}</p>
                <p>₦${item.price}</p>
                <p>Quantity: 
                    <button class="decrease-btn" data-index="${index}">-</button>
                    ${item.quantity} 
                    <button class="increase-btn" data-index="${index}">+</button>
                </p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toString();

    document.querySelectorAll('.increase-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const index = e.target.dataset.index;
            increaseQuantity(index);
        });
    });

    document.querySelectorAll('.decrease-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const index = e.target.dataset.index;
            decreaseQuantity(index);
        });
    });

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const index = e.target.dataset.index;
            removeFromCart(index);
        });
    });
}
}

function increaseQuantity(index) {
    cartItems[index].quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCart();
    updateCart();
}

function decreaseQuantity(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    loadCart();
    updateCart();
    }
}
function loadTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    totalPriceElement.textContent = '' + totalPrice;
    
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCart();
    updateCart();
}

document.addEventListener('DOMContentLoaded', loadCart);
