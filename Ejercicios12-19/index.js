function animacion(event) {
    console.log("Pulsar");
    document.getElementById("menu").classList.toggle("active");
    document.getElementById("botonModal").classList.toggle("fa");
    document.getElementById("botonModal").classList.toggle("fa-list");

    if(document.getElementById("menu").classList.contains("active"))
    {
        document.getElementById("botonModal").innerHTML = "X";
    }
    else
    {
        document.getElementById("botonModal").innerHTML = "";
    }
}

document.getElementById("botonModal").addEventListener("click", animacion);