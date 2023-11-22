"use strict";
$(function () {
	// 데이터 기준 모달 열기
	$(".date__view--btn").on("click", function () {
		$(".modal__wrap").fadeIn();
		$("body, html").css("overflow-y", "hidden");
	});
});
