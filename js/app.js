//* Filtro de países por región
const filtroRegion = document.querySelector("#filtrar");
const tarjetas = document.querySelectorAll(".card");

filtroRegion.addEventListener("change", () => {
    const regionSeleccionada = filtroRegion.value;

    tarjetas.forEach((tarjeta) => {
        const regiones = tarjeta.dataset.region.split(" ");

        const mostrarTarjeta = regionSeleccionada === "todas" || regiones.includes(regionSeleccionada);

        tarjeta.hidden = !mostrarTarjeta;
    });
});

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