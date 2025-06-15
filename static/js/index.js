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


//Gestion du caroussel--------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#imageCarousel');
    const images = carousel.querySelectorAll('li');
    const indicatorDots = document.querySelector('#indicatorDots');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let currentIndex = 0;
    const totalImages = images.length;
    let autoSlideInterval;

    // Générer les dots dynamiquement
    images.forEach((_, i) => {
        const dot = document.createElement('li');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
            resetAutoSlide();
        });
        indicatorDots.appendChild(dot);
    });

    const dots = indicatorDots.querySelectorAll('li');

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // change toutes les 5s
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    updateCarousel();
    startAutoSlide();
});
