"use strict";

$(document).ready(function () {
	var fileTarget = $(".upload__file--box input");

	fileTarget.on("change", function () {
		console.log("123");
		if (window.FileReader) {
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split("/").pop().split("\\").pop();
		}

		$(this).siblings(".upload__name").text(filename);
	});
});
