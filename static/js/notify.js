const notify = document.querySelector(".ref ul li");


let isClicked = true;

notify.addEventListener("click", (e) => {
    notify.classList.toggle("clicking");
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