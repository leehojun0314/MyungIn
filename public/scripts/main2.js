$(document).ready(function () {
	function cam() {
		var $gnbLi = $("#header2 .area2 .btm .btm_wrap #gnb > ul > li");
		var $mnDiv = $("#main2 .cnt1 .area2 > div");
		var $fvBtn = $("#header2 .area2 .top ul > li.me_fv_btn > a");
		var $fvClose = $("#header2 .area2 .me_fullview .close_btn");
		var $mefull = $("#header2 .area2 .me_fullview");

		$(window).on("resize", function () {
			var wid = $(this).outerWidth();
			var hei = $(this).outerHeight();
			var imgH = $("#main2 .cnt1 .area2 .mid li img").outerHeight();

			if (wid < 1280) {
				$("#main2 .cnt1 .area2").css("padding-top", imgH);
			} else {
				$("#main2 .cnt1 .area2").css("padding-top", "29px");
			}

			if (wid > 1280) {
				$mnDiv.css("height", imgH);
			} else if (wid > 500) {
				$mnDiv.css("height", "auto");
				$("#main2 .cnt1 .area2 .left").css("height", "500px");
				$("#main2 .cnt1 .area2 .right").css("height", "500px");
			} else {
				$mnDiv.css("height", "auto");
				$("#main2 .cnt1 .area2 .left").css("height", "380px");
				$("#main2 .cnt1 .area2 .right").css("height", "380px");
			}

			if (wid < 501) {
				$("#header2 .full_menu")
					.css("height", hei - 70)
					.addClass("on");
			} else if (wid < 721) {
				$("#header2 .full_menu")
					.css("height", hei - 90)
					.addClass("on");
			} else {
				$("#header2 .full_menu").css("height", "468px");
			}

			$("#header2 .full_menu.on > ul > li h3").click(function () {
				if ($(this).parent().hasClass("on")) {
					$(this).parent().removeClass("on");
					$(this).find("img").css("transform", "rotate(0deg)");
					$(this).next().stop().slideUp();
				} else {
					$(this).parent().addClass("on");
					$(this).find("img").css("transform", "rotate(45deg)");
					$(this).next().stop().slideDown();
				}
			});
		});
		$(window).trigger("resize");

		$gnbLi.on({
			mouseenter: function () {
				$(this).children("ul").stop().slideDown();
			},
			mouseleave: function () {
				$(this).children("ul").stop().slideUp();
			},
		});

		$fvBtn.on("click", function () {
			$mefull.css("display", "block");
			return false;
		});

		$fvClose.on("click", function () {
			$mefull.css("display", "none");
		});

		$("#header2 .area2 .btm .btm_wrap .ham_btn .hamburger").on(
			"click",
			function () {
				if ($(this).hasClass("on")) {
					$(this)
						.removeClass("on")
						.find("img")
						.attr("src", "../images/main/gate_hd_ham.jpg");
					$(".full_menu").stop().slideUp();
				} else {
					$(this)
						.addClass("on")
						.find("img")
						.attr("src", "../images/main/gate_hd_ham_on.jpg");
					$(".full_menu").stop().slideDown();
				}
			},
		);

		$("#header2 .area2 .btm .btm_wrap .ham_btn .mb_me_fv_btn").on(
			"click",
			function () {
				$fvBtn.click();
			},
		);

		$("#main2 .cnt1 .area2 .left ul li").on({
			mouseenter: function () {
				$(this).css({
					background: "#fff",
					border: "2px solid #0c0f81",
					"box-shadow": "3px 9px 8px rgba(14,5,9,0.2)",
				});
			},
			mouseleave: function () {
				$(this).css({
					background: "#f3f3f3",
					border: "2px solid #f3f3f3",
					"box-shadow": "none",
				});
			},
		});

		$("#main2 .cnt1 .area2 .right ul li").on({
			mouseenter: function () {
				$(this).css({
					background: "#fff",
					border: "2px solid #0c0f81",
					"box-shadow": "3px 9px 8px rgba(14,5,9,0.2)",
				});
			},
			mouseleave: function () {
				$(this).css({
					background: "#f3f3f3",
					border: "2px solid #f3f3f3",
					"box-shadow": "none",
				});
			},
		});

		$("#header2 .area2 .btm .btm_wrap .alarm").on("click", function () {
			$("#alarmPopup").css("display", "block");
			$("#black").css("display", "block");
			return false;
		});

		$("#alarmPopup .close_btn").on("click", function () {
			$(this).parent().css("display", "none");
			$("#black").css("display", "none");
			return false;
		});
	}
	cam();

	function camS21() {
		var $prfBtn = $(
			"#camS21 .cnt1 .area .txt .tab_split .tab_cnt > div ul li .frt .profile_btn",
		);

		$("#camS21 .cnt1 .area .txt .tab_split .tab_btn li a").on(
			"click",
			function () {
				var tgIdx = $(this).parent().index();
				$(this).parent().addClass("on").siblings().removeClass("on");
				$(this)
					.closest(".tab_split")
					.find(">.tab_cnt>div")
					.eq(tgIdx)
					.show()
					.siblings()
					.hide();
				return false;
			},
		);

		$prfBtn.on("mouseenter", function () {
			$(this).parent().css("display", "none").next().css("display", "block");
		});

		$("#camS21 .cnt1 .area .txt .tab_split .tab_cnt > div ul li").on(
			"mouseleave",
			function () {
				$(this)
					.find(".frt")
					.css("display", "block")
					.next()
					.css("display", "none");
			},
		);
	}
	camS21();

	function camS31() {
		var $ctwBtn = $(
			"#camS31 .cnt1 .area .txt .tab_split > .tab_cnt > div .tab_split2 .sub_tab_cnt > div .div_tb ul li.tb_txt > ul li .ctw_btn",
		);
		var $reservBtn = $(
			"#camS31 .cnt1 .area .txt .tab_split > .tab_cnt > div .tab_split2 .sub_tab_cnt > div .div_tb ul li.tb_txt > ul li .reserv_btn",
		);
		var $aplBtn = $(
			"#camS31 .cnt1 .area .txt .tab_split > .tab_cnt > div .tab_split2 .sub_tab_cnt > div .div_tb ul li.tb_txt > ul li .apl_btn",
		);
		var $reservPu = $("#reservPopup");
		var $payPu = $("#payPopup");
		var $rpClose = $("#reservPopup .close_btn");
		var $ppClose = $("#payPopup .close_btn");

		$("#camS31 .cnt1 .area .txt .tab_split .tab_btn li a").on(
			"click",
			function () {
				var tgIdx = $(this).parent().index();
				$(this).parent().addClass("on").siblings().removeClass("on");
				$(this)
					.closest(".tab_split")
					.find(">.tab_cnt>div")
					.eq(tgIdx)
					.show()
					.siblings()
					.hide();
				return false;
			},
		);

		$(
			"#camS31 .cnt1 .area .txt .tab_split > .tab_cnt > div .tab_split2 .tab_btn2 li a",
		).on("click", function () {
			var tgIdx2 = $(this).parent().index();
			$(this).parent().addClass("on").siblings().removeClass("on");
			$(this)
				.closest(".tab_split2")
				.find(">.sub_tab_cnt>div")
				.eq(tgIdx2)
				.show()
				.siblings()
				.hide();
			return false;
		});

		$(
			"#camS31 .cnt1 .area .txt .tab_split > .tab_cnt > div .tab_split2 .sub_tab_cnt > div .tab_split3 .tab_btn3 li a",
		).on("click", function () {
			var tgIdx3 = $(this).parent().index();
			$(this).parent().addClass("on").siblings().removeClass("on");
			$(this)
				.closest(".tab_split3")
				.find(">.dth3_tab_cnt>div")
				.eq(tgIdx3)
				.show()
				.siblings()
				.hide();
			return false;
		});

		$ctwBtn.on("click", function () {
			if ($(this).hasClass("on")) {
				$(this).removeClass("on").closest("ul").next().stop().slideUp();
			} else {
				$(this).addClass("on").closest("ul").next().stop().slideDown();
			}
			return false;
		});

		$reservBtn.on("click", function () {
			$reservPu.css("display", "block");
			$("#black").css("display", "block");
			return false;
		});

		$aplBtn.on("click", function () {
			$payPu.css("display", "block");
			$("#black").css("display", "block");
			return false;
		});

		$rpClose.on("click", function () {
			$reservPu.css("display", "none");
			$("#black").css("display", "none");
		});

		$ppClose.on("click", function () {
			$payPu.css("display", "none");
			$("#black").css("display", "none");
		});
	}
	camS31();

	function camS41() {
		$("#camS41 .cnt1 .area .txt .tab_split .tab_btn li a").on(
			"click",
			function () {
				var tgIdx = $(this).parent().index();
				$(this).parent().addClass("on").siblings().removeClass("on");
				$(this)
					.closest(".tab_split")
					.find(">.tab_cnt>div")
					.eq(tgIdx)
					.show()
					.siblings()
					.hide();
				return false;
			},
		);

		$(
			"#camS41 .cnt1 .area .txt .tab_split .tab_cnt > div .tab_split2 .tab_btn2 li a",
		).on("click", function () {
			var tgIdx = $(this).parent().index();
			$(this).parent().addClass("on").siblings().removeClass("on");
			$(this)
				.closest(".tab_split2")
				.find(">.sub_tab_cnt>div")
				.eq(tgIdx)
				.show()
				.siblings()
				.hide();
			return false;
		});

		$(
			"#camS41 .cnt1 .area .txt .tab_split .tab_cnt > div .btn_wrap .req_brf",
		).on("click", function () {
			$("#camReqPu").css("display", "block");
			$("#black").css("display", "block");
			return false;
		});

		$("#camReqPu .close_btn").on("click", function () {
			$(this).parent().css("display", "none");
			$("#black").css("display", "none");
		});

		$(
			"#camS41 .cnt1 .area .txt .tab_split .tab_cnt > div .btn_wrap .req_inq",
		).on("click", function () {
			$("#camReqIqPu").css("display", "block");
			$("#black").css("display", "block");
			return false;
		});

		$("#camReqIqPu .close_btn").on("click", function () {
			$(this).parent().css("display", "none");
			$("#black").css("display", "none");
		});
	}
	camS41();

	function camS42() {
		$("#camS42 .cnt1 .area .txt .tab_split .tab_btn li a").on(
			"click",
			function () {
				var tgIdx = $(this).parent().index();
				$(this).parent().addClass("on").siblings().removeClass("on");
				$(this)
					.closest(".tab_split")
					.find(">.tab_cnt>div")
					.eq(tgIdx)
					.show()
					.siblings()
					.hide();
				return false;
			},
		);

		$(
			"#camS42 .cnt1 .area .txt .tab_split .tab_cnt > div .tab_split2 .tab_btn2 li a",
		).on("click", function () {
			var tgIdx = $(this).parent().index();
			$(this).parent().addClass("on").siblings().removeClass("on");
			$(this)
				.closest(".tab_split2")
				.find(">.sub_tab_cnt>div")
				.eq(tgIdx)
				.show()
				.siblings()
				.hide();
			return false;
		});
	}
	camS42();
});
