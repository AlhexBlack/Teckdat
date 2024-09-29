document.addEventListener("DOMContentLoaded", function () {
    const authForm = document.getElementById('authForm');
    const usernameInput = document.getElementById('username');
    const authSubmit = document.getElementById('authSubmit');
    const switchToSignup = document.getElementById('switchToSignup');
    const toggleAuth = document.getElementById('toggleAuth');
    const formTitle = document.getElementById('form-title');

    let isLogin = true;

    function toggleLoginSignup(e) {
        e.preventDefault();
        isLogin = !isLogin;

        if (isLogin) {
            formTitle.textContent = 'Sign In';
            authSubmit.textContent = 'Sign In';
            toggleAuth.innerHTML = 'Not a member? <a href="#" id="switchToSignup">Sign up here</a>';
        } else {
            formTitle.textContent = 'Sign Up';
            authSubmit.textContent = 'Sign Up';
            toggleAuth.innerHTML = 'Already have an account? <a href="#" id="switchToSignup">Sign in here</a>';
        }

        document.getElementById('switchToSignup').addEventListener("click", toggleLoginSignup);
    }

    switchToSignup.addEventListener("click", toggleLoginSignup);

    authForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = usernameInput.value;

        if (username) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);

            const redirectToCheckout = localStorage.getItem('redirectToCheckout');
            if (redirectToCheckout) {
                localStorage.removeItem('redirectToCheckout');
                window.location.href = '/pages/checkout.html';
            } else {
                window.location.href = '/';
            }
        }
    });
});
