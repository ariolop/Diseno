"use strict";

document.getElementById("menuBurguer").addEventListener( ("click"), () => {
    console.log("click");
    document.getElementById("menu").classList.toggle("hidden");
    // document.getElementById("nav").classList.toggle(`h-[6vh]`);
});