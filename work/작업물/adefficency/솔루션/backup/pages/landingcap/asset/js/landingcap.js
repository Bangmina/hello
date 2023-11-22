"use strict";

$(function () {
	$(".thumbnail__btn").on("click", function () {
		console.log("123");
		$(".modal__wrap").fadeIn();
		$(".modal__content").html(
			`<img class="modal__thumbnail" src="${$(this)
				.find("img")
				.prop("src")}" alt="thumbnail">`
		);
		$("body, html").css("overflow-y", "hidden");
	});
});
