'use strict'

/* JS */
// 디바이스 체크
function checkMobile() {
  var varUA = navigator.userAgent.toLowerCase() //userAgent 값 얻기

  var target = document.querySelector('.p-main')
  if (!isMobile()) return false //에뮬레이터가 아닌 실제 모바일 디바이스인지 체크

  if (varUA.indexOf('android') > -1) {
    target.classList.add('android')
  } else if (
    varUA.indexOf('iphone') > -1 ||
    varUA.indexOf('ipad') > -1 ||
    varUA.indexOf('ipod') > -1
  ) {
    //IOS
    target.classList.add('ios')
  } else {
    //아이폰, 안드로이드 외
    target.classList.add('others')
  }
} //Swiper 생성

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  breakpoints: {
    320: {
      allowTouchMove: true,
      spaceBetween: 10,
    },
    769: {
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
}) //키비주얼 캔버스 생성

function canvasDraw() {
  var canvas = document.querySelector('.kv__masking')
  var ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  var windowW = window.innerWidth
  // var vwSet = (windowW / 100) * 0.0520833333
  var squareWidth = 745
  var squareHeight = 710
  var squareX = canvas.width / 2 - squareWidth / 2
  var squareY = canvas.height / 2 - squareHeight / 2 //pc

  // if (App.sizeMode === 3) {
  //   squareWidth = 460
  //   squareHeight = 680
  //   squareX = windowW / 2 - squareWidth / 2
  //   squareY = canvas.height / 2 - squareHeight / 2 // surfice
  // } else if (window.innerWidth <= 768 && window.innerWidth >= 540) {
  //   squareWidth = squareWidth * 1.5
  //   squareHeight = squareHeight * 1.5
  //   squareX = windowW / 2 - squareWidth / 2
  //   squareY = canvas.height / 2 - squareHeight / 2 // mobile
  // } else if (App.sizeMode === 0) {
  //   squareWidth = squareWidth * 2.5
  //   squareHeight = squareHeight * 2.5
  //   squareX = windowW / 2 - squareWidth / 2
  //   squareY = canvas.height / 2 - squareHeight / 2
  // }

  canvas.classList.add('kv__masking--off')
  ctx.fillStyle = '#fff'
  ctx.beginPath()
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.clearRect(squareX, squareY, squareWidth, squareHeight)
} // 초기 스크롤 블록

function scrollFixed() {
  setTimeout(function () {
    frameTimeline()
  }, 100)
} //텍스트, 사진 스크롤 인터렉션

function timeInteraction(sections) {
  sections.reduce(function (acc, cur) {
    var texts = ''.concat(cur, ' .motion-txt')
    var pics = ''.concat(cur, ' .img-box')
    ScrollTrigger.create({
      trigger: cur,
      start: 'top-=40% top',
      onEnter: function onEnter() {
        gsap.utils.toArray(texts).forEach(function (text) {
          ScrollTrigger.create({
            trigger: text,
            // start: "40% bottom",
            onEnter: function onEnter() {
              text.classList.add('txt-hello')
            },
          })
        })
        gsap.utils.toArray(pics).forEach(function (pic) {
          ScrollTrigger.create({
            trigger: pic,
            start: '40% bottom',
            onEnter: function onEnter() {
              pic.classList.add('img-hello')
            },
          })
        })
      },
    })
  }, 0)
  return false
} // 프레임 타임라인

function frameTimeline() {
  var description = document.querySelector('.description')
  var letterInnerFirst = document.querySelector(
    '.letters-first .letters__inner',
  )
  var letterInnerSecond = document.querySelector(
    '.letters .letters-second .letters__inner',
  )
  var kvMasking = document.querySelector('.kv__masking')
  var timelineFrame = gsap.timeline({
    delay: 0.5,
  })
  timelineFrame
    .addLabel('beforeFrameZoom')
    .addLabel('kvup') // firstletter 인
    .to(
      letterInnerFirst,
      {
        onStart: function onStart() {
          return letterInnerFirst.classList.add('txt-hello')
        },
      },
      'kvup',
    ) // firstletter 아웃
    .addLabel('letterout')
    .to(
      '.letter',
      {
        opacity: 0,
        duration: 0.8,
      },
      'letterout+=1',
    )
    .to(
      '.note',
      {
        opacity: 0,
        duration: 0.8,
      },
      'letterout+=1',
    ) // kv masking 아웃
    .addLabel('maskingout')
    .to(
      kvMasking,
      {
        scale: 8,
        duration: 3,
        onComplete: function onComplete() {
          kvMasking.classList.add('kv__masking--hidden')
        },
      },
      'maskingout',
    )
    .to(
      '.kv__masked__keyvisual',
      {
        scale: 1,
        duration: 0.8,
      },
      'maskingout',
    ) // second letter 익스펜드,인
    .addLabel('expanded')
    .to(
      '.letters',
      {
        className: 'letters letters--expanded',
      },
      'expanded-=3',
    )
    .to(
      '.letter',
      {
        opacity: 1,
        duration: 0.1,
      },
      'expanded-=3',
    )
    .to(
      '.note',
      {
        opacity: 1,
        duration: 0.1,
      },
      'expanded-=3',
    )
    .to(
      letterInnerSecond,
      {
        onStart: function onStart() {
          return letterInnerSecond.classList.add('txt-hello')
        },
      },
      'expanded-=2',
    )
    .to(
      '.kv__masked__keyvisual--scale',
      {
        opacity: 1,
        duration: 0.1,
      },
      'expanded-=2',
    )
  timelineFrame.eventCallback('onComplete', function () {
    document.querySelector('.p-main').classList.remove('loading')

    Array.prototype.forEach.call(
      document.querySelectorAll('.main-dialog'),
      function (element) {
        if (!getCookie(element.id)) {
          element.setAttribute('aria-hidden', false)
        }
      },
    )

    if (document.querySelectorAll('.main-dialog').length) {
      function mainDialogHandler() {
        if (window.prevInnerWidth === window.innerWidth) {
          return
        }
        if (window.innerWidth <= 768) {
          document.querySelector('.main-dialog-group').style.height =
            window.innerHeight + 'px'
        } else {
          document.querySelector('.main-dialog-group').removeAttribute('style')
        }
        window.prevInnerWidth = window.innerWidth
      }

      window.addEventListener('resize', mainDialogHandler)
      mainDialogHandler()
    }
  })
} // 프레임 백그라운드 스케일

function frameBackgroundScale() {
  var targetEl = document.querySelector('#frame')
  var scales = gsap.timeline({
    scrollTrigger: {
      trigger: targetEl,
      start: function start() {
        return '+='.concat(targetEl.offsetTop, 'px')
      },
      end: function end() {
        return '+='.concat(targetEl.offsetHeight, 'px')
      },
      scrub: 1,
    },
  })
  scales
    .addLabel('beforeFrameZoom')
    .to(
      '.kv__masked__keyvisual--scale',
      {
        scale: 1.4,
      },
      'beforeFrameZoom+=0.5',
    )
    .to(
      '.letters-second',
      {
        opacity: 0,
        duration: 0.05,
      },
      'beforeFrameZoom',
    )
} // 커넥트 스크롤 픽스

function connectScrollFix() {
  var targetEl = document.querySelector('.connect__contetns')
  var changeEl = document.querySelector('.fixed-area')
  ScrollTrigger.create({
    trigger: targetEl,
    start: function start() {
      return '+='.concat(targetEl.offsetTop)
    },
    end: function end() {
      return '+='.concat(
        targetEl.offsetHeight - (window.innerHeight + (isMobile() ? 120 : 0)),
        'px',
      )
    },
    //모바일일 경우 기준 위치 보정
    onEnter: function onEnter() {
      changeEl.classList.add('fixed-area--fixed')
    },
    onEnterBack: function onEnterBack() {
      changeEl.classList.remove('fixed-area--underfloat')
      changeEl.classList.add('fixed-area--fixed')
    },
    onLeave: function onLeave() {
      changeEl.classList.remove('fixed-area--fixed')
      changeEl.classList.add('fixed-area--underfloat')
    },
    onLeaveBack: function onLeaveBack() {
      changeEl.classList.remove('fixed-area--fixed')
      changeEl.classList.remove('fixed-area--underfloat')
    },
    scrub: 1,
  })
} // 커넥트 글자 교차 인터렉션

// function connectTextCross(start, dest) {
//   var s1 = start.s1,
//       s2 = start.s2,
//       s3 = start.s3;
//   var d1 = dest.d1,
//       d2 = dest.d2,
//       d3 = dest.d3,
//       d4 = dest.d4;
//   var targetEl = document.querySelector('#connect');
//   var timelineConnect = gsap.timeline({
//     scrollTrigger: {
//       trigger: targetEl,
//       start: function start() {
//         return "+=".concat(targetEl.offsetTop - window.innerHeight * 1.4, "px");/* 1주년 메인 비주얼 관련 수정 2.8 ->1.4 */
//       },
//       // 많이 곱할수록 빨리 시작 (2=> top top, .8 => view port (20%))
//       end: function end() {
//         return "+=".concat(targetEl.offsetTop - window.innerHeight, "px");
//       },
//       // 많이 곱할수록 빨리 끝남
//       scrub: 1
//     }
//   });
//   timelineConnect.addLabel('letterSliding').fromTo('.fraction__letter__01', {
//     x: "".concat(s1, "rem")
//   }, {
//     x: "".concat(d1, "rem")
//   }, 'letterSliding').fromTo('.fraction__letter__02', {
//     x: "".concat(s2, "rem")
//   }, {
//     x: "".concat(d2, "rem")
//   }, 'letterSliding').fromTo('.fraction__letter__03', {
//     x: "".concat(s3, "rem")
//   }, {
//     x: "".concat(d3, "rem")
//   }, 'letterSliding');
// } // 포레스트 배경 블랙 체인지

/* 2021-12-28 수정 [S] */
// 포레스트 가로 스크롤
/* 2021-12-28 수정 [E] */

/* 에뮬레이터가 아닌 실제 모바일 디바이스인지 체크 */

function isMobile() {
  return (
    navigator.platform
      .toLocaleLowerCase()
      .search(/(android|webos|iphone|ipad|ipod|blackberry|iemobile|opera)/) >
      -1 &&
    navigator.userAgent.toLowerCase().search(/(android|iphone|ipad|ipod)/) > -1
  )
}
/* //에뮬레이터가 아닌 실제 모바일 디바이스인지 체크 */

function iosNativeBar() {
  var myheight = window.innerHeight
  /* 모바일 체크 조건 수정 */
  // const isiOS = document.querySelector('.p-main').classList.contains('ios')
  // const isAndroid = document.querySelector('.p-main').classList.contains('android')

  /* //모바일 체크 조건 수정 */

  var iosNativeHeight = 120 // let mobileAgain = undefined //사용하지 않는 변수 제거

  if (isMobile()) {
    //모바일 체크 조건 수정
    document.querySelector('#frame .frame__contents').style.height = ''.concat(
      myheight + iosNativeHeight,
      'px',
    )
    document.querySelector(
      '#frame .kv__masked__keyvisual',
    ).style.height = ''.concat(myheight + iosNativeHeight, 'px')
    document.querySelector(
      '#frame .kv__masked__keyvisual--scale',
    ).style.height = ''.concat(myheight + iosNativeHeight, 'px')
    document.querySelector(
      '.letters-second .letters__inner',
    ).style.height = ''.concat(myheight, 'px')
    document.querySelector('#connect .fixed-area').style.height = ''.concat(
      myheight + iosNativeHeight,
      'px',
    )
  }
} // ios 네이티브 바 대응 pc 구간 리셋

function iosNativeBarReset() {
  document.querySelector('#frame .frame__contents').style.height = '100vh'
  document.querySelector('#frame .kv__masked__keyvisual').style.height = '100vh'
  document.querySelector('#frame .kv__masked__keyvisual--scale').style.height =
    '100vh'
  document.querySelector('.letters-second .letters__inner').style.height =
    '100%'
  document.querySelector('#connect .fixed-area').style.height = '100vh'
} //로드, 리사이즈 이벤트 시작

App.bindCallback(['load', 'resize'], function () {
  canvasDraw()
  checkMobile()
  resizeUrl()
}) // 리사이즈 이벤트 시작

App.bindCallback(['resize'], function () {
  if (App.sizeMode !== 0) iosNativeBarReset()
}) // 초기 로드 이벤트 시작

App.bindCallback(['load'], function () {
  scrollFixed()
  if (App.sizeMode === 0) iosNativeBar()
}) // 스크롤 트리거 적용

ScrollTrigger.matchMedia({
  // 전 구간
  all: function all() {
    connectScrollFix()
  },
  //PC 구간
  '(min-width: 769px)': function minWidth769px() {
    var interactionSection = [
      '#connect',
      '#forest .first-section',
      '#art',
      '#safety',
      '#exp',
    ]
    var start = {
      s1: 600,
      s2: 260,
      s3: 320,
    }
    var destination = {
      d1: -5,
      d2: 540,
      d3: 1100,
    }

    timeInteraction(interactionSection)
    connectTextCross(start, destination)
  },
  // MO 구간
  '(max-width: 768px)': function maxWidth768px() {
    var interactionSection = ['#connect', '#forest', '#art', '#safety', '#exp']
    var start = {
      s1: -280,
      s2: -100,
      s3: 240,
    }
    var destination = {
      d1: 30,
      d2: 5,
      d3: 50,
    }
    timeInteraction(interactionSection)
    connectTextCross(start, destination)
  },
})

// 메인 레이어 팝업 닫기

function closePopupToday(closePopupVer) {
  const mainDialogButtonCloseToday = document.querySelectorAll(
    closePopupVer + ' .main-dialog__button-close-today',
  )
  Array.prototype.forEach.call(mainDialogButtonCloseToday, function (element) {
    element.addEventListener('click', function (e) {
      var target = e.target
      var id = target.getAttribute('aria-controls')
      document.querySelector('#' + id).setAttribute('aria-hidden', 'true')
      setCookieAtDay(id, true, 1)
    })
  })
}

function closePopup(closePopupVer) {
  const mainDialogButtonClose = document.querySelectorAll(
    closePopupVer + ' .main-dialog__button-close',
  )
  Array.prototype.forEach.call(mainDialogButtonClose, function (element) {
    element.addEventListener('click', function (e) {
      var target = e.target
      var id = '#' + target.getAttribute('aria-controls')
      document.querySelector(id).setAttribute('aria-hidden', 'true')
    })
  })
}

function resizeUrl() {
  $('.btn--search').each(function () {
    var $this = $(this)
    var thisUrl =
      App.sizeMode == 0 ? $this.attr('data-url-mo') : $this.attr('data-url-pc')
    $this.attr('href', thisUrl)
  })
}

closePopupToday('.main-dialog-group.v1')
closePopupToday('.main-dialog-group.v2')
closePopup('.main-dialog-group.v1')
closePopup('.main-dialog-group.v2')

$(document).ready(function () {
  $('.anni_imgwrap').each(function () {
    var randNum = Math.random() * 2.5
    $(this).css('transition-delay', randNum + 's')
  })
  $('.anni_imgwrap').removeClass('anni_fade_start')
})
