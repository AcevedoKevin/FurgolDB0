const fileInput = document.getElementById("file_input");
const dataImg = document.getElementById("dataImg");
const prevImg = document.getElementById("prevImg");
if (fileInput) {
    fileInput.addEventListener("change", (event) => {
        const e = event.target
        const file = e.files[0];
        let data = {};
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const dataSplit = reader.result;
            data = {
                name: file.name,
                size: file.size,
                type: file.type,
                encode: dataSplit,
            };
            prevImg.src = dataSplit;
            prevImg.alt = file.name;
            dataImg.value = dataSplit;
        };
    });
}

///Boton añadir tematica
const btnAñadir = document.getElementById("btnAñadir");
const formMainAdd = document.querySelector(".fondoAdd");
const formMain = document.querySelector("body > .form-main");
const cerrarAdd = document.getElementById("cerrarAdd");
if (formMainAdd && btnAñadir)
    btnAñadir.addEventListener("click", () => {
        formMainAdd.style.display = "flex";
        formMain.style.display = "none";

    });

if (formMainAdd && cerrarAdd)
    cerrarAdd.addEventListener("click", () => {
        formMainAdd.style.display = "none";
        formMain.style.display = "grid";

    });