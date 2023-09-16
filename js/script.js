let btnNav = document.querySelector('.header__btn');
let windowNav = document.querySelector('.header__nav');
btnNav.addEventListener('click', function () {
    btnNav.classList.toggle('active');
    windowNav.classList.toggle('active');
});