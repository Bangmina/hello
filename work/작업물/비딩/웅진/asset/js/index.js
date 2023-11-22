"use strict";

$(function () {
	var currentPosition = parseInt($(".banner__side").css("top"));
	$(window).scroll(function () {
		// 오른쪽 팝업 따라다니게 동작
		var position = $(window).scrollTop();
		$(".banner__side")
			.stop()
			.animate({ top: position + currentPosition + "px" }, 100);

		// 왼쪽 네비 스크롤값에 따라 활성화
		const navItemLength = $(".nav__item--anchor").length - 1;
		for (let i = 0; i <= navItemLength; i++) {
			if (position > $(".section").eq(i).offset().top - 2) {
				$(".nav__item--anchor").removeClass("active");
				$(".nav__item").eq(i).children(".nav__item--anchor").addClass("active");
			}
		}
	});

	// 네비 활성화
	$(".nav__item--anchor").on("click", function () {
		const navIdx = $(this).parent("li").index();
		const sectionTop = $(".section").eq(navIdx).offset().top;

		console.log(navIdx);
		console.log(sectionTop);

		$(".nav__item--anchor").removeClass("active");
		$(this).addClass("active");

		$("html, body").scrollTop(sectionTop);
	});
});
