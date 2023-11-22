// input[type="text"] 숫자만 입력 / 문자제거
function removeChar(event) {
  event = event || window.event;
  var keyID = event.which ? event.which : event.keyCode;

  if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39) {
    return;
  } else {
    //숫자만 입력
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }
}

// 콤마찍기
function comma(obj) {
  var regx = new RegExp(/(-?\d+)(\d{3})/);
  var bExists = obj.indexOf('.', 0);
  var strArr = obj.split('.');

  while (regx.test(strArr[0])) {
    strArr[0] = strArr[0].replace(regx, '$1,$2');
  }
  if (bExists > -1) {
    obj = strArr[0] + '.' + strArr[1];
  } else {
    obj = strArr[0];
  }
  return obj;
}

// 콤마풀기
function uncomma(str) {
  str = '' + str.replace(/,/gi, '');
  str = str.replace(/(^\s*)|(\s*$)/g, '');

  return new Number(str); //문자열을 숫자로 반환
}

// input box에 콤마 달기
function inputNumberFormat(obj) {
  obj.value = comma(obj.value);
}

function modalClose() {
  $('html, body').css('overflow-y', 'auto');
  $('.modal').fadeOut(300);
}

$(function () {
  $('.apply__close').on('click', function () {
    $('.apply, .apply_top').fadeOut();
  });
  //새로고침 했을 때 스크롤 맨 위로 보내기
  history.scrollRestoration = 'manual';
  window.onload = function () {
    1;
    setTimeout(function () {
      scrollTo(0, 0);
    }, 100);
  };

  // nav 토글버튼
  $('.menu__btn').on('click', function () {
    $('.header').toggleClass('active');
    if ($('.header').hasClass('active')) {
      // nav 열렸을 때
      $('.nav').fadeIn(300);
      $('.header.border').removeClass('bg_white');
      $('body,html').css('overflow-y', 'hidden');
    } else {
      // nav 닫혔을 때
      $('.nav').fadeOut(300);
      $('.header.border').addClass('bg_white');
      $('body,html').css('overflow-y', 'auto');
    }
  });

  // top 버튼 (공통)
  $('.btn__top').on('click', function () {
    $('html, body').stop().animate({ scrollTop: '0' }, 200);
  });

  $(window).on('scroll', function () {
    // 탑 버튼
    if ($(window).scrollTop() > $(window).height()) {
      $('.btn__top, .apply').css('transform', 'translateY(0)');
    } else {
      $('.btn__top, .apply').css('transform', 'translateY(105px)');
    }

    // header 스크롤 이벤트
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        // 투명 배경 + 하얀로고 -> 하얀배경 + 색깔로고
        $('.header.transparence').addClass('shadow');
        $('.header.transparence').removeClass('white');
      } else {
        $('.header.border').removeClass('shadow');
        $('.header.transparence').removeClass('shadow');
        $('.header.transparence').addClass('white');
      }
    });
  });

  // AOS (공통)
  AOS.init({
    duration: 1000,
    once: true,
  });

  // 클릭으로 모달 닫기
  $('.modal__close, .modal__bg').on('click', function () {
    // $(this).parents('.modal').fadeOut(300);
    modalClose();
  });
  // esc로 모달 닫기
  $(document).keydown(function (event) {
    if ($('.modal').is(':visible')) {
      if (event.keyCode == 27 || event.which == 27) {
        modalClose();
      }
    }
  });

  // 데이트피커 한국어 변환 (공통)x
  $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    monthNamesShort: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년',
  });
  $('.datepicker').datepicker();
});
