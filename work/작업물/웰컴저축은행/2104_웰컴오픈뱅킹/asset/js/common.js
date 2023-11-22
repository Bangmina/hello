'use strict';

$(function() {
  // 스크롤 이벤트
  $(window).on('scroll', function () {

    // 플로팅 버튼 show
    $('.floating').stop().addClass('opacity');

    // 플로팅 버튼 hide
    if ($(window).scrollTop() === 0) {
      $('.floating').stop().removeClass('opacity');
    }

  });

  // 화살표 클릭 시 이동
  $(".visual__btn--arrow").on("click", function () {

    const infoOffsetTop = $(".info").offset().top;
    $("html, body").animate({ scrollTop: infoOffsetTop}, 300);

  });
})