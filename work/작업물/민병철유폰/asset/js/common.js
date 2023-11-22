'use strict';
$(function () {
  // 모달열기
  const $modalBtn = $('.visual__form__btn--modal, .floating__btn--detail');
  $modalBtn.on('click', function () {
    console.log('123');
    $('.modal').fadeIn(300);
  });

  // 모달닫기
  const $modalClose = $('.modal__btn--close, .modal__bg');
  $modalClose.on('click', function () {
    $('.modal').fadeOut(300);
  });

  // 폼 전체체크
  $('.visual__all--check').on('click', function () {
    $("input[name='agree']").prop('checked', $(this).is(':checked'));
  });
  // 폼 개별체크
  $("input[name='agree']").on('click', function () {
    var isChecked = true;
    $('.visual__check--input').each(function () {
      isChecked = isChecked && $(this).is(':checked');
    });

    $('.visual__all--check').prop('checked', isChecked);
  });

  //스크롤 화살표
  $('.arrow__area--btn').on('click', function () {
    const scollOffsetTop = $('.info1 ').offset().top + 30;
    $('html, body').animate({ scrollTop: scollOffsetTop }, 300);
  });

  // 플로팅배너 노출
  const $floating = $('.floating, .btn__top');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 1670) {
      $floating.fadeIn(300);
    } else {
      $floating.fadeOut(300);
    }
  });

  //탑버튼
  $('.btn__top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 300);
  });
});
