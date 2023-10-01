// Menu-burger
let btnNav = document.querySelector('.header__btn');
let windowNav = document.querySelector('.header__nav');
btnNav.addEventListener('click', function () {
    btnNav.classList.toggle('active');
    windowNav.classList.toggle('active');
});

// Slider
let swiper = new Swiper(".reviews__slider", {
    slidesPerView: 1,
    centeredSlides: true,
    effect: "cards",
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Accordion
new ItcAccordion(document.querySelector('.accordion'), {
    alwaysOpen: false
});

// Animation
AOS.init({
    duration: 800,
    once: false,
});