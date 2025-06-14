const notify = document.querySelector(".ref ul li");


let isClicked = true;

notify.addEventListener("click", (e) => {
    notify.classList.toggle("clicking");
})