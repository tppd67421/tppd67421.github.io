$(document).ready(function(){

	$(".footer__up").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 650);
  });


  // Duppy file
  // let msnry = new Masonry( '.dap-info', {
  //   itemSelector: '.dap-info-item'
  // });

  var gamburger = $('.dap-menu__gamburger');
  var gamburger_active = $('.dap-menu__gamburger_active');
  var menu = $('.dap-menu__all');

  gamburger.click(function(){
  	gamburger.toggleClass('dap-menu__gamburger_active');
  	menu.toggleClass('dap-menu__all_active');
  });



  // var $footer = $('#main-footer');
  //     if ($footer.length) {
  //         var footer_height = $footer.height();
  //         $(window).on('load resize', function() {
  //             var available_height = $(window).height() - footer_height,
  //                 $main_content = $('#main-content'),
  //                 $admin_bar = $('#wpadminbar'),
  //                 $top_header = $('#top-header'),
  //                 $main_header = $('#main-header');
   
  //             if ($admin_bar.length) {
  //                 var available_height = available_height - $admin_bar.height();
  //             }
   
  //             if ($top_header.length) {
  //                 var available_height = available_height - $top_header.height();
  //             }
   
  //             if (!$('.et_transparent_nav').length && !$('.et_vertical_nav').length) {
  //                 var available_height = available_height - $main_header.height();
  //             }
   
  //             if (available_height > $main_content.height()) {
  //                 $main_content.height(available_height);
  //             }
  //         });
  //     }

  // $('.footer').css('position', 'fixed');
  // $('.footer').css('bottom', '0');

  // var $footer = $('.footer');
  //     if ($footer.length) {
  //         var footer_height = $footer.height();
  //         $(window).on('load resize', function() {
  //             var available_height = $(window).height() - footer_height,
  //                 $menu = $('.menu'),
  //                 $header = $('.header'),
  //                 $contacts = $('.contacts');
  //                 // $main_header = $('#main-header');

   
  //             if ($menu.length) {
  //                 var available_height = available_height - $menu.height();
  //             }
   
  //             if ($header.length) {
  //                 var available_height = available_height - $header.height();
  //             }

  //             if ($contacts.length) {
  //                 var available_height = available_height - $contacts.height();
  //             }

  //             if ($available_height.length) {
  //                 $('.footer').css('position', 'fixed');
  //                 $('.footer').css('bottom', '0');
  //             }
   
  //             // if (!$('.et_transparent_nav').length && !$('.et_vertical_nav').length) {
  //             //     var available_height = available_height - $main_header.height();
  //             // }
   
  //             // if (available_height > $main_content.height()) {
  //             //     $main_content.height(available_height);
  //             // }
  //         });
  //     }

});