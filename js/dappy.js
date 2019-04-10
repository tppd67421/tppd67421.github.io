window.onload = function() {

  let msnry = new Masonry( '.info', {
    itemSelector: '.info-item'
  });

  const gamburger = document.querySelector('.menu__gamburger');
  const menu = document.querySelector('.menu__all');
  const body = document.querySelector('body');
  let gamburgerCounter = 0;

  gamburger.addEventListener('click', function() {
    gamburger.classList.toggle('menu__gamburger_active');
    menu.classList.toggle('menu__all_active');
    if(gamburgerCounter == 0) {
      body.style.overflowY = 'hidden';
      gamburgerCounter = 1;
    } else if(gamburgerCounter == 1) {
      body.style.overflowY = 'auto';
      gamburgerCounter = 0;
    }
  });

};