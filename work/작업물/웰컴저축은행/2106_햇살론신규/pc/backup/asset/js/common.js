'use strict';

// 스크롤 이벤트
$(window).on('scroll', function () {
  // 플로팅 버튼 show
  $('.inquiry').stop().fadeIn();
  // 탑버튼 show
  $(".top_btn").stop().fadeIn();

  // 플로팅, 탑버튼 hide
  if ($(window).scrollTop() === 0) {
    $('.inquiry').stop().fadeOut();
    $('.top_btn').stop().fadeOut();
  }
  // 하이라이트
  $('.highlight').each(function () {
    const minusNum = $(window).height() / 1.3;
    const elScroll = $(this).offset().top - minusNum;

    if ($(window).scrollTop() > elScroll) {
      $(this).addClass('active');
    }
  });

  // 탑버튼 scrollTop : 0
  $(".top_btn").on('click', function() {
    $('html, body').stop().animate({scrollTop:'0'},200);
})

});
