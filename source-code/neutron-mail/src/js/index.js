import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    breakpoints: {
        800: {
            touchRatio: 0,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});


const gamburger = document.querySelectorAll('.gamburger__item');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

let gamburgerOpen = false;

document.querySelector('.gamburger').addEventListener('click', () => {
    if (!gamburgerOpen) {
        gamburger.forEach(item => item.classList.add('open'));
        mobileMenu.classList.add('active');
        body.style.overflowY = 'hidden';
        gamburgerOpen = true;
    } else {
        gamburger.forEach(item => item.classList.remove('open'));
        mobileMenu.classList.remove('active');
        body.style.overflowY = 'auto';
        gamburgerOpen = false;
    }
})