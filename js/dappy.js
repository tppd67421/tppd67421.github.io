window.onload = function() {

  let msnry = new Masonry( '.dap-info', {
    itemSelector: '.dap-info-item'
  });

  const gamburger = document.querySelector('.dap-menu__gamburger');
  const menu = document.querySelector('.dap-menu__all');
  const body = document.querySelector('body');
  let gamburgerCounter = 0;

  gamburger.addEventListener('click', function() {
    gamburger.classList.toggle('dap-menu__gamburger_active');
    menu.classList.toggle('dap-menu__all_active');
    if(gamburgerCounter == 0) {
      body.style.overflowY = 'hidden';
      gamburgerCounter = 1;
    } else if(gamburgerCounter == 1) {
      body.style.overflowY = 'auto';
      gamburgerCounter = 0;
    }
  });

};