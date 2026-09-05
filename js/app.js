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