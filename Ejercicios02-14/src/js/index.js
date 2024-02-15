document.getElementById("botonOscuro").addEventListener(('click'), () => {
    document.documentElement.classList.toggle("dark");
    document.getElementById("iconoOscuro").classList.toggle("bi-moon");
    document.getElementById("iconoOscuro").classList.toggle("bi-sun");
});

