"use strict";

$(function () {
	// 스크롤 이벤트
	$(window).on("scroll", function () {
		// 플로팅 버튼 hide
		if ($(window).scrollTop() === 0) {
		}

		if ($(window).scrollTop() >= $(".visual__content").offset().top) {
			// 플로팅 버튼 show
			$(".floating").stop().addClass("opacity");
		} else {
			$(".floating").stop().removeClass("opacity");
		}
	});
});
