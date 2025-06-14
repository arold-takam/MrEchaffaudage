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


// Article management
const btnClose = document.querySelector("#close img");
const articleDetails = document.querySelector(".articleDetails");
const seeBtn = document.querySelector(".see");


seeBtn.addEventListener("click", (e) => {
    articleDetails.style.transform = "scale(1)";
    articleDetails.style.opacity = "1";
    articleDetails.style.zIndex = "200";

    btnClose.classList.add("blinkingBtn");
});

btnClose.addEventListener("click", (e) => {
    articleDetails.style.transform = "scale(0.25)";
    articleDetails.style.opacity = "0";
    articleDetails.style.zIndex = "0";
});