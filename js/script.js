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
    duration: 1000,
    once: false,
});

let btnLink1 = document.querySelector('.header__link_1');
let btnLink2 = document.querySelector('.header__link_2');
let btnLink3 = document.querySelector('.header__link_3');
let btnLink4 = document.querySelector('.header__link_4');
let btnLink5 = document.querySelector('.header__link_5');
btnLink1.addEventListener('click', function () {
    btnNav.classList.toggle('active');
    windowNav.classList.toggle('active');
});
btnLink2.addEventListener('click', function () {
    btnNav.classList.toggle('active');
    windowNav.classList.toggle('active');
});
btnLink3.addEventListener('click', function () {
    btnNav.classList.toggle('active');
    windowNav.classList.toggle('active');
});
btnLink4.addEventListener('click', function () {
    btnNav.classList.toggle('active');
    windowNav.classList.toggle('active');
});
btnLink5.addEventListener('click', function () {
    btnNav.classList.toggle('active');
    windowNavclassList.toggle('active');
});
