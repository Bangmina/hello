"use strict";
$(function () {
	// 전체동의
	$(".check__all").on("click", function () {
		if ($(this).prop("checked")) {
			$(this).parent().siblings("ul").find("input").prop("checked", true);
		} else {
			$(this).parent().siblings("ul").find("input").prop("checked", false);
		}
	});

	$(".check__list input").on("click", function () {
		//check name
		const checkInputName = $(this).prop("name");
		//checkbox length
		const checkboxLength = $(`.check__list input[name="${checkInputName}"]`)
			.length;
		// checked length
		const checkedLength = $(
			`.check__list input[name="${checkInputName}"]:checked`
		).length;
		// all check select
		const $checkedAll = $(this)
			.parents(".check__list")
			.siblings(".all")
			.find(".check__all");

		if (checkboxLength === checkedLength) {
			$checkedAll.prop("checked", true);
		} else {
			$checkedAll.prop("checked", false);
		}
	});
});
