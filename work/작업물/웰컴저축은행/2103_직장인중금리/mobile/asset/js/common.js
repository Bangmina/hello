'use strict';

// 스크롤 이벤트
$(window).on('scroll', function () {
  // 플로팅 버튼 show
  $('.floating').stop().addClass('opacity');

  // 플로팅 버튼 hide
  if ($(window).scrollTop() === 0) {
    $('.floating').stop().removeClass('opacity');
  }
});
