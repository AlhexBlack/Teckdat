document.addEventListener('DOMContentLoaded', function () {
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('checkout-cart-items');
    const totalPriceElement = document.getElementById('checkout-total-price');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn !== 'true') {
        window.location.href = '/pages/login.html';
    }

    let totalPrice = 0;
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} <i class="fa-solid fa-multiply"></i> ${item.quantity}</p>
            <p>₦${item.price * item.quantity}</p>
        `;
        cartItemsContainer.appendChild(cartItem);

        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = '' + totalPrice;
});

document.getElementById('billing-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;
    const card = document.getElementById('card').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    if (name && address && city && zip && card && expiry && cvv) {
        alert("Payment successful! Thank you for your purchase.");
        localStorage.removeItem('cartItems');
        window.location.href = '/pages/thankyou.html';
    } else {
        alert("Please fill in all the fields.");
    }
});
