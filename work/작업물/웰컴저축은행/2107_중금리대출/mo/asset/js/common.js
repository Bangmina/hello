'use strict';

// 스크롤 이벤트
$(window).on('scroll', function () {

  if ($(window).scrollTop() >= $(".visual__btn").offset().top + 80) {
    // 플로팅 버튼 show
    $('.floating').stop().addClass('opacity active');
    

  } else {
    // 플로팅 버튼 hide
    $('.floating').stop().removeClass('opacity active');
  }

});
