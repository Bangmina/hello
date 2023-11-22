'use strict';


$(function() {
  
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= $('.advantage').offset().top) {
      $('.floating').stop().fadeIn();
      $('.floating').addClass('active');
    } else {
      $('.floating').stop().fadeOut();
    }
  });

})