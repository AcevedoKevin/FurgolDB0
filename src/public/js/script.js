const limpiarNav = (element) => {
    element.forEach((e) => {
        e.classList.remove("active");
    })
}
const navliAdmin = document.querySelectorAll("#ulAdmin > .nav-item");


if (!navliAdmin) {
    navliAdmin.forEach((element) => {
        element.addEventListener("click", (event) => {
            limpiarNav(navliAdmin);
            element.classList.add("active");
        })
    });
}