const parallax = document.getElementById("parallax");
const parallaxImg = document.getElementById("parallaxImg");
const parallaxH = parallax.offsetHeight;
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (window.scrollY >= parallax.offsetHeight - nav.offsetHeight) {
        nav.classList.add("nav-contrast");
        parallaxImg.style.top = 0;
    } else {
        nav.classList.remove("nav-contrast");
        parallaxImg.style.top = window.scrollY + "px";
    }
});
window.addEventListener("load", () => {
    if (window.scrollY >= parallax.offsetHeight - nav.offsetHeight) {
        nav.classList.add("nav-contrast");
        parallaxImg.style.top = 0;
    } else {
        nav.classList.remove("nav-contrast");
        parallaxImg.style.top = window.scrollY + "px";
    }
});