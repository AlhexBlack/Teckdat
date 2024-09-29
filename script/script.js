const sideOpen = document.getElementById("showNavLinks");
const sideClose = document.getElementById("hideNavLinks");
const navLinks = document.getElementById("navLinks");

if (sideOpen && sideClose && navLinks) {
    sideOpen.addEventListener("click", () => {
        navLinks.classList.toggle("showNav");
    });

    sideClose.addEventListener("click", () => {
        navLinks.classList.remove("showNav");
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const usernameDisplay = document.getElementById('usernameDisplay');

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');

    if (isLoggedIn === 'true' && username) {
        usernameDisplay.textContent = username;
    } else {
        usernameDisplay.textContent = 'Login';
    }
});
