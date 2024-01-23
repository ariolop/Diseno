"use script";

const elementNext = document.getElementById("next");

for (let i = 0; i < 90; i++) {
    const element = document.createElement("div");
    element.id = "pixel" + i;
    element.classList.add("pixel");

    elementNext.appendChild(element);
}