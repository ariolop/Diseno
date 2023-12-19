function animacion(event) {
    console.log("Pulsar");
    document.getElementById("modal").classList.toggle("active");
    // document.getElementById("lista").classList.toggle("mostrar");
}

document.getElementById("pulsar").addEventListener("click", animacion);