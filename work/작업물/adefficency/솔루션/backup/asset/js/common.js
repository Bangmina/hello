"use strict";

$(function () {
	// pc gnb
	const $navItem = $(".nav__item");
	const $navDepth = $(".nav__depth");

	$navItem.on({
		"mouseenter focusin": function () {
			$(this).find($navDepth).addClass("active");
			$(this).addClass("active").find($navDepth).stop().fadeIn(100);
		},
		"mouseleave focusout": function () {
			$navDepth.removeClass("active");
			$(this).removeClass("active").find($navDepth).stop().fadeOut(100);
		},
	});

	// mobile menu btn
	$(".header__menu--btn.open").on("click", function () {
		$(".side__menu").stop().fadeIn();
		$("body").css("overflow-y", "hidden");
	});
	$(".header__menu--btn.close").on("click", function () {
		$(".side__menu").stop().fadeOut();
		$("body").css("overflow-y", "auto");
	});

	// mobile gnb
	$(".snav__title--item a").on("click", function () {
		// title active
		$(this)
			.addClass("active")
			.parent()
			.siblings()
			.children("a")
			.removeClass("active");

		//subtit show
		const titIndex = $(this).parent().index();
		$(".side__depth--list").hide().eq(titIndex).show();
	});

	// top btn
	const viewHeight = window.innerHeight;

	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 50) {
			$(".top__btn").fadeIn();
			$(".header").addClass("header__shadow");
		} else {
			$(".top__btn").fadeOut();
			$(".header").removeClass("header__shadow");
		}
	});

	$(".top__btn").on("click", function () {
		$("html").animate({ scrollTop: 0 }, 300);
	});

	// input file name
	const fileTarget = $(".upload__file--box input");

	fileTarget.on("change", function () {
		console.log("123");
		if (window.FileReader) {
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split("/").pop().split("\\").pop();
		}
		$(this).siblings(".upload__name").text(filename);
	});

	//modal close
	$(document).on("click", function (e) {
		if (
			e.target.className === "modal__wrap" ||
			e.target.className === "modal__close--btn"
		) {
			$(".modal__wrap").fadeOut();
			$("body, html").css("overflow-y", "auto");
		}
	});

	//datepicker
	$(".form__input--date")
		.datepicker({
			autoclose: true, //사용자가 날짜를 클릭하면 자동 캘린더가 닫히는 옵션
			calendarWeeks: false, //캘린더 옆에 몇 주차인지 보여주는 옵션 기본값 false 보여주려면 true
			clearBtn: false, //날짜 선택한 값 초기화 해주는 버튼 보여주는 옵션 기본값 false 보여주려면 true
			disableTouchKeyboard: false, //모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
			immediateUpdates: false, //사용자가 보는 화면으로 바로바로 날짜를 변경할지 여부 기본값 :false
			multidate: false, //여러 날짜 선택할 수 있게 하는 옵션 기본값 :false
			multidateSeparator: ",", //여러 날짜를 선택했을 때 사이에 나타나는 글짜 2019-05-01,2019-06-01
			templates: {
				leftArrow: "&laquo;",
				rightArrow: "&raquo;",
			}, //다음달 이전달로 넘어가는 화살표 모양 커스텀 마이징
			showWeekDays: true, // 위에 요일 보여주는 옵션 기본값 : true
			todayHighlight: true, //오늘 날짜에 하이라이팅 기능 기본값 :false
			toggleActive: true, //이미 선택된 날짜 선택하면 기본값 : false인경우 그대로 유지 true인 경우 날짜 삭제
			weekStart: 0, //달력 시작 요일 선택하는 것 기본값은 0인 일요일
			language: "ko", //달력의 언어 선택, 그에 맞는 js로 교체해줘야한다.
		})
		.datepicker("setDate", new Date());
});
