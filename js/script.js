let btnNav = document.querySelector('.header__btn');
let windowNav = document.querySelector('.header__nav');
btnNav.addEventListener('click', function () {
    btnNav.classList.toggle('active');
    windowNav.classList.toggle('active');
});

let swiper = new Swiper(".reviews__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    effect: "coverflow",
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});