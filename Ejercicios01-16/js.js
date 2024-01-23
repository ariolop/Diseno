// "use script";

const jugadores = document.getElementsByClassName("jugador");

for (const jugador of jugadores) {
    jugador.addEventListener(("click"), () => {
        console.log("i" + jugador.id.charAt(1));
        const ventana = document.getElementById("i" + jugador.id.charAt(1));

        if(ventana.classList.contains("mostrada"))
        {
            ventana.classList.remove("mostrada");
            console.log("Ventana ocultada"); 
        }
        else
        {
            const ventanaMostrada = document.getElementsByClassName("mostrada");

            if(ventanaMostrada.length > 0)
            {
                console.log("Ventana mostrada" + ventanaMostrada[0].id);
                ventanaMostrada[0].classList.remove("mostrada");

                ventana.classList.add("mostrada");
                console.log("Ventana ocultada");
            }
            else
            {
                ventana.classList.add("mostrada");
                console.log("Ventana mostrada");
            }
        }
    });
}

document.getElementById("iconoHamburguesa").addEventListener(("click"), () => {
    document.getElementById("menu").classList.toggle("mostrarMenu");
});