'use strict';
$(window).on('scroll', function () {
  if ($(window).scrollTop() >= $('.advantage').offset().top) {
    $('.floating').stop().fadeIn();
  } else {
    $('.floating').stop().fadeOut();
  }
});
