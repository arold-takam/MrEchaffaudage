// Services management
const btnClose = document.querySelector("#close img");
const servicesDetails = document.querySelector(".servicesDetails");
const seeBtn = document.querySelector(".see");


seeBtn.addEventListener("click", (e) => {
    servicesDetails.style.transform = "scale(1)";
    servicesDetails.style.opacity = "1";
    servicesDetails.style.zIndex = "200";

    btnClose.classList.add("blinkingBtn");
});

btnClose.addEventListener("click", (e) => {
    servicesDetails.style.transform = "scale(0.25)";
    servicesDetails.style.opacity = "0";
    servicesDetails.style.zIndex = "0";
});

// Menu management--------------------------------------------------------------------------
const openMenu = document.querySelector(".menuOpen");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector(".menu");

openMenu.addEventListener("click", () => {
    menu.style.transform = "translateX(0%)";
    menu.style.opacity = "1";
});

closeMenu.addEventListener("click", () => {
    menu.style.transform = "translateX(-100%)";
    menu.style.opacity = "0";
});

