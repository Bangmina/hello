'use strict';
$(function () {
  // nav 스크롤바
  var myElement = document.getElementById('nav');
  new SimpleBar(myElement, { autoHide: true });

  // nav active
  const navHasDepth = $(this).parent('.nav_depth1__item').hasClass('depth');
  const navHasActive = $(this).parent('.nav_depth1__item').hasClass('active');
  const $navDepth1Item = $('.nav_depth1__item');

  $('.nav_depth1__item--anchor').on('click', function () {
    if (
      $(this).parent('.nav_depth1__item').hasClass('depth') &&
      $(this).parent('.nav_depth1__item').hasClass('bg_active')
    ) {
      $(this).parent().removeClass('active bg_active');
      $(this).siblings('.nav_depth2__list').slideUp(100);
    } else if (!navHasActive) {
      $navDepth1Item.removeClass('active');
      $(this).parent().addClass('active');
      $(this).siblings('.nav_depth2__list').slideDown(100);
      if ($(this).parent('.nav_depth1__item').hasClass('depth')) {
        $(this).parent().addClass('bg_active');
      } else {
        $('.nav_depth2__item').removeClass('active');
      }
    }
  });

  $('.nav_depth2__item--anchor').on('click', function () {
    $('.nav_depth2__item').removeClass('active');
    $(this).parents('.nav_depth2__item').addClass('active');
    $('.nav_depth1__item').removeClass('active');
    $(this).parents('.nav_depth1__item').addClass('active');
  });

  // 게시판 탭
  $('.content_tab__item--anchor').on('click', function () {
    $('.content_tab__item').removeClass('active');
    $(this).parents('.content_tab__item').addClass('active');
  });

  // 페이지네이션 active
  $('.pagenation__anchor.num').on('click', function () {
    $('.pagenation__anchor.num').removeClass('active');
    $(this).addClass('active');
  });

  // 모바일 메뉴
  $('.aside__mobile--menu').on('click', function () {
    $(this).toggleClass('active');
    $('.nav, .aside__profile--btn_box').stop().fadeToggle(200);
  });

  // 데이트픽커
  const $datepicker = $(
    '.board__datepicker--input, .member_view__input--datepicker, .view_form__datepicker',
  );
  $datepicker.datepicker({
    format: 'yyyy-mm-dd',
    setDate: 'today',
    autoclose: true,
    todayHighlight: true,
  });
  $('.board__datepicker--input').datepicker('setDate', 'today');
  $('.view_form__datepicker.end').datepicker('setDate', '+2D'); // 희망완료일 2일 뒤 설정

  // 좋아요 버튼
  $('.good__btn').on('click', function () {
    $(this).toggleClass('active');
  });
  // 게시글 댓글 작성 에디터
  $('.comment_edit__textarea').summernote({
    placeholder: '작성시 필요한 이미지는 에디터에 붙여넣기(ctrl+v) 가능합니다.',
    height: 170,
    lang: 'ko-KR',
  });

  // 게시글 view 에디터 (확대)
  $('.view_form__subject').summernote({
    minHeight: 500,
    lang: 'ko-KR',
    toolbar: [['view', ['fullscreen']]],
    oninit: function () {
      $('.note-editable').css('min-height', '500px');
    },
  });
  // 게시글 작성 에디터
  $('.write__textarea').summernote({
    placeholder: '작성시 필요한 이미지는 에디터에 붙여넣기(ctrl+v) 가능합니다.',
    height: 500,
    lang: 'ko-KR',
  });

  // input file 커스텀 - 파일명 붙이기
  const fileTarget = $('.form__input--file_wrap input');

  fileTarget.on('change', function () {
    var files = $('.form__input--file_wrap input')[0].files;
    var fileArr = [];

    for (var i = 0; i < files.length; i++) {
      fileArr.push(files[i].name);
    }

    $(this).siblings('.form__span--file').text(fileArr);
  });

  // 모달창 닫기

  $('.modal__btn--close, .modal__bg').on('click', function () {
    $(this).closest('.modal').fadeOut(300);
  });
});

// 240723 아코디언
document.addEventListener('DOMContentLoaded', function () {
  var headers = document.querySelectorAll('.accordion-header');

  headers.forEach(function (header) {
    header.addEventListener('click', function () {
      var content = this.nextElementSibling;
      var isOpen = content.style.maxHeight;

      // 모든 섹션 닫기
      headers.forEach(function (item) {
        var content = item.nextElementSibling;
        content.style.maxHeight = null;
        content.style.padding = '0 15px';
      });

      // 클릭한 섹션을 토글
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '15px';
      }
    });
  });
});
