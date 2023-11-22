'use strict';

// 스크롤 이벤트
$(window).on('scroll', function () {
  // 플로팅 버튼 show
  $('.inquiry').stop().fadeIn();

  // 플로팅 버튼 hide
  if ($(window).scrollTop() === 0) {
    $('.inquiry').stop().fadeOut();
  }
  // 하이라이트
  $('.highlight').each(function () {
    const minusNum = $(window).height() / 1.3;
    const elScroll = $(this).offset().top - minusNum;

    if ($(window).scrollTop() > elScroll) {
      $(this).addClass('active');
    }
  });
});
