//* Variables a usar
const filtroRegion = document.querySelector("#filtrar");
const tarjetas = document.querySelectorAll(".card");

const formularioBusqueda = document.querySelector("#form-busqueda");
const campoBusqueda = document.querySelector("#busqueda");
const errorBusqueda = document.querySelector("#error-busqueda");

//* Función para el filtrado y validación
function aplicarFiltros() {
    const regionSeleccionada = filtroRegion.value;
    const paisBuscado = campoBusqueda.value.trim().toLowerCase();

    tarjetas.forEach((tarjeta) => {
        const regiones = tarjeta.dataset.region.split(" ");

        const nombrePais = tarjeta.querySelector("h3").textContent.toLowerCase();

        const coincideRegion = 
            regionSeleccionada === "" ||
            regionSeleccionada === "todas" ||
            regiones.includes(regionSeleccionada);

        const coincideBusqueda =
            paisBuscado === "" ||
            nombrePais.includes(paisBuscado);

        tarjeta.hidden = !(coincideRegion && coincideBusqueda);
    });
}

//* Filtro de países por región
filtroRegion.addEventListener("change", aplicarFiltros);

//* Validación formulario

formularioBusqueda.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const paisBuscado = campoBusqueda.value.trim();

    if (paisBuscado === "") {
        errorBusqueda.textContent = "Debes escribir el nombre de un país";
        errorBusqueda.hidden = false;
        return;
    }

    errorBusqueda.hidden = true;

    aplicarFiltros();
})

//* Modo oscuro
const botonTema = document.querySelector(".header__tema");
const textoTema = document.querySelector("span");

botonTema.addEventListener("click", () => {
    const modoOscuroActivo = document.body.classList.toggle("modo-oscuro");

    if (modoOscuroActivo) {
        textoTema.textContent = "Modo claro";
        botonTema.setAttribute("aria-label", "Activar modo claro");
    } else {
        textoTema.textContent = "Modo oscuro";
        botonTema.setAttribute("aria-label", "Activar modo oscuro");
    }
})