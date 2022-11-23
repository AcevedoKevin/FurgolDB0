const cargaContainer = document.querySelector(".carga-container");

window.addEventListener("beforeunload", () => {
    cargaContainer.classList.add('active');
});
window.addEventListener("unload", () => {
    cargaContainer.classList.remove('active');
});

window.addEventListener("load", () => { window.scrollTo(0, 1); });