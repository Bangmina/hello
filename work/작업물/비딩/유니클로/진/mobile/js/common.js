"use strict";

var App = {
  cbs: {
    load: [],
    resize: []
  },
  bindCallback: function bindCallback(_evtArr, _func) {
    _evtArr.forEach(function (item) {
      App.cbs[item].push(_func);
    });
  },
  init: function init() {
    this.cbs['load'].forEach(function (_cb) {
      _cb();
    });
  },
  resize: function resize() {
    this.cbs['resize'].forEach(function (_cb) {
      _cb();
    });
  }
};
document.addEventListener('DOMContentLoaded', function () {
  App.init();
});
window.addEventListener('resize', function () {
  App.resize();
});
App.bindCallback(['load', 'resize'], function () {
  App.winWidth = $(window).width();
  App.winHeight = $(window).height();
  App.sizeMode = App.winWidth <= 768 ? 0 : App.winWidth < 1024 ? 1 : App.winWidth <= 1920 ? 2 : 3;
});

function updateOrientation() {
  switch (window.orientation) {
    case 0:
      $('.l-header').removeClass('blend');
      setTimeout(function () {
        $('.l-header').addClass('blend');
      }, 100);
      break;

    case -90:
      $('.l-header').removeClass('blend');
      setTimeout(function () {
        $('.l-header').addClass('blend');
      }, 100);
      break;

    case 90:
      $('.l-header').removeClass('blend');
      setTimeout(function () {
        $('.l-header').addClass('blend');
      }, 100);
      break;

    case 180:
      $('.l-header').removeClass('blend');
      setTimeout(function () {
        $('.l-header').addClass('blend');
      }, 100);
      break;
  }
}

window.onload = function () {
  document.body.onorientationchange = updateOrientation;
};

(function ($) {
  var agent = navigator.userAgent.toLowerCase();
  var platform = navigator.platform.toLowerCase();

  if (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1 || agent.indexOf("msie") != -1) {
    $('html').addClass('br-ie');
  } else if (agent.indexOf("chrome") != -1) {
    if (agent.indexOf("edge") != -1 || agent.indexOf("edg") != -1) {
      $('html').addClass('br-edge');
    } else {
      $('html').addClass('br-ch');

      if (agent.indexOf("windows") != -1 || agent.indexOf("android") != -1 && platform.indexOf("mac") == -1) {
        $('html').addClass('br-win-ch');
      }
    }
  } else if (agent.indexOf("safari") != -1 && !(agent.indexOf("chrome") != -1)) {
    $('html').addClass('br-safari');
  }

  $('.c-header__box--btn').on('click', function () {
    if (!$('.c-header').hasClass('c-header--open')) {
      $('.c-header').addClass('c-header--open');
      $('body').addClass('hidden');
      $('.l-header').removeClass('blend');
    } else {
      $('.c-header').removeClass('c-header--open');
      $('body').removeClass('hidden');
      $('.l-header').addClass('blend');
    }
  });
  $('.top').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 0);
  });
  /* 2021-12-28 수정 [S] */
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();

    if ($('.floor--info').length == 0) {
      if (scrollTop > 0) {
        $('.top').fadeIn();
        $('.btn--search').fadeIn();
        

      } else {
        $('.top').fadeOut();
        $('.btn--search').fadeOut();
      }
    }
  });
})(window.jQuery);
/* 2021-12-28 수정 [E] */

/* 쿠키 설정 */
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))

  return matches ? decodeURIComponent(matches[1]) : undefined
}

function setCookieAtDay(name, value, expiredays) {
  var date = new Date()
  var nextDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + expiredays)
  var expires = "; expires=" + nextDate.toGMTString()
  document.cookie = name + "=" + value + expires + "; path=/"
}


// Polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}