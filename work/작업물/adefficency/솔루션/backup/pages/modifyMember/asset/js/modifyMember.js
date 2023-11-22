"use strict";
$(function () {
	const memberChk = $('.checkbox__wrap.member input[type="checkbox"]');
	$("#checkAll").on("click", function () {
		if ($(this).prop("checked")) {
			memberChk.prop("checked", true);
		} else {
			memberChk.prop("checked", false);
		}
	});

	memberChk.on("click", function () {
		const chkboxLength = memberChk.length;
		const chkLength = $('.checkbox__wrap.member input[name="member"]:checked')
			.length;
		if (chkboxLength === chkLength) {
			$("#checkAll").prop("checked", true);
		} else {
			$("#checkAll").prop("checked", false);
		}
	});
});
