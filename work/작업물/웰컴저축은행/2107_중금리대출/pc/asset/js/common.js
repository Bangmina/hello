'use strict';
$(window).on('scroll', function () {
  if ($(window).scrollTop() >= $('.info ').offset().top - 100) {
    $('.floating').css("opacity", "1");
    $('.floating').addClass("active")
    
  } else {
    $('.floating').css("opacity", "0");
    $('.floating').removeClass("active")

  }
});
