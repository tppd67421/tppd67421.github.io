$(document).ready(function(){

	$(".footer__up").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 650);
  });


  // Duppy file
  let msnry = new Masonry( '.dap-info', {
    itemSelector: '.dap-info-item'
  });

  var gamburger = $('.dap-menu__gamburger');
  var gamburger_active = $('.dap-menu__gamburger_active');
  var menu = $('.dap-menu__all');

  gamburger.click(function(){
  	gamburger.toggleClass('dap-menu__gamburger_active');
  	menu.toggleClass('dap-menu__all_active');
  });

});