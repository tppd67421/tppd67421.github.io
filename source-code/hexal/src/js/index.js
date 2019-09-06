import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});
