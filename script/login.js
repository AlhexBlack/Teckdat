// Handle showing/hiding of auth modal
const authModal = document.getElementById('authModal');
const authForm = document.getElementById('authForm');
const usernameInput = document.getElementById('username');
const authSubmit = document.getElementById('authSubmit');
const closeModal = document.querySelector('.close'); // Selecting the close button
const userIcon = document.getElementById('user-icon');
const usernameDisplay = document.getElementById('username-display');
const dropdownUsername = document.getElementById('dropdown-username');
const logoutBtn = document.getElementById('logout-btn');
let switchToSignup = document.getElementById('switchToSignup');
const toggleAuth = document.getElementById('toggleAuth');

// Toggle between login/signup
let isLogin = true;

function toggleLoginSignup() {
    isLogin = !isLogin;
    document.getElementById('form-title').textContent = isLogin ? 'Login' : 'Sign Up';
    authSubmit.textContent = isLogin ? 'Login' : 'Sign Up';
    toggleAuth.innerHTML = isLogin
        ? "Don't have an account? <a href='#' id='switchToSignup'>Sign up here</a>"
        : "Already have an account? <a href='#' id='switchToSignup'>Login here</a>";

    // Reattach event listener to the new "switchToSignup" link after the HTML change
    switchToSignup = document.getElementById('switchToSignup');
    switchToSignup.addEventListener('click', toggleLoginSignup);
}

// Initial event listener for switching
switchToSignup.addEventListener('click', toggleLoginSignup);

// Show modal when user icon is clicked
userIcon.addEventListener('click', () => {
    authModal.style.display = 'block';
});

// Close modal when close icon is clicked
if (closeModal) {
    closeModal.addEventListener('click', () => {
        authModal.style.display = 'none';
    });
}

// Close modal if clicked outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === authModal) {
        authModal.style.display = 'none';
    }
});

// Handle login/signup submit
authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;

    if (username) {
        localStorage.setItem('username', username);
        usernameDisplay.textContent = username;
        dropdownUsername.textContent = username;
        authModal.style.display = 'none';
    }
});

// Handle logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    usernameDisplay.textContent = 'Guest';
    dropdownUsername.textContent = 'Guest';
});

// Load username if already logged in
window.onload = function () {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        usernameDisplay.textContent = storedUsername;
        dropdownUsername.textContent = storedUsername;
    }
};
