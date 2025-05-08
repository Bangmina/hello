'use strict';

$(function () {
  // visual 클릭
  $('.visual__item').on('click', function () {
    // 클릭 방지 시작
    $('.visual').css('pointer-events', 'none');

    $('.visual__item').removeClass('active');
    $(this).addClass('active');
    $(this).css({
      width: 'calc(100% - 100px)',
    });
    // 1번 째 클릭
    if ($('.visual__item:nth-of-type(1)').hasClass('active')) {
      $('.visual__item:nth-of-type(2), .visual__item:nth-of-type(3) ').css(
        'width',
        '50px',
      );
      $('.visual__item:nth-of-type(2)').css({
        left: 'auto',
        right: '50px',
      });
    }

    // 2번 째 클릭
    else if ($('.visual__item:nth-of-type(2)').hasClass('active')) {
      $('.visual__item:nth-of-type(1), .visual__item:nth-of-type(3)').css(
        'width',
        '50px',
      );
    }

    // 3번 째 클릭
    else if ($('.visual__item:nth-of-type(3)').hasClass('active')) {
      $('.visual__item:nth-of-type(1), .visual__item:nth-of-type(2)').css(
        'width',
        '50px',
      );
      $('.visual__item:nth-of-type(2)').css('left', '50px');
    }
    // 클릭 방지 해제 (0.5초 후)
    setTimeout(function () {
      $('.visual').css('pointer-events', '');
    }, 300);
  });

  $('.visual__item').on({
    mouseenter: function () {
      // active아닌거 mouseover
      if (!$(this).hasClass('active')) {
        // 1번째가 active
        if ($('.visual__item:nth-of-type(1)').hasClass('active')) {
          // this가 2번째, mouseover 됐을 때
          if ($(this).is('.visual__item:nth-of-type(2)')) {
            // this(2) 값 조정
            $(this).stop().animate({ width: '100px' }, 500);
            // 남은 아이템 조정
            $('.visual__item:nth-of-type(3)')
              .stop()
              .animate({ width: '50px' }, 500);
          }
          // this가 3번 째, mouseover 됐을 때
          else if ($(this).is('.visual__item:nth-of-type(3)')) {
            // this (3) 값 조정
            $(this).stop().animate({ width: '100px' }, 500);
            // 남은 아이템 조정
            $('.visual__item:nth-of-type(2)')
              .stop()
              .animate({ width: '150px' });
          }
        } else if ($('.visual__item:nth-of-type(2)').hasClass('active')) {
          console.log('456');
        } else if ($('.visual__item:nth-of-type(3)').hasClass('active')) {
          console.log('789');
        }
      }
    },
    mouseleave: function () {
      if (!$(this).hasClass('active')) {
        // 1번째가 active
        if ($('.visual__item:nth-of-type(1)').hasClass('active')) {
          // this가 2번째, mouseoout 됐을 때
          if ($(this).is('.visual__item:nth-of-type(2)')) {
            // this(2) 값 조정
            $(this).stop().animate({ width: '100px' }, 500);
            // 남은 아이템 조정
            $('.visual__item:nth-of-type(3)')
              .stop()
              .animate({ width: '50px' }, 500);
          }
          // this가 3번 째, mouseout 됐을 때
          else if ($(this).is('.visual__item:nth-of-type(3)')) {
            // this (3) 값 조정
            $(this).stop().animate({ width: '50px' }, 500);
            // 남은 아이템 조정
            $('.visual__item:nth-of-type(2)')
              .stop()
              .animate({ width: '100px' });
          }
        } else if ($('.visual__item:nth-of-type(2)').hasClass('active')) {
          console.log('456');
        } else if ($('.visual__item:nth-of-type(3)').hasClass('active')) {
          console.log('789');
        }
      }
    },
  });
});
