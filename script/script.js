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

