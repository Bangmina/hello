$(function () {
  $('.top_btn').on('click', function () {
    $('html, body').stop().animate({ scrollTop: '0' }, 200)
  })
})
