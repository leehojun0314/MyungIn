$(document).ready(function () {
	function gate() {
		var $gnbLi = $("#header .area2 #gnb > ul > li");
		var $fvBtn = $("#header .area2 .util > ul > li.me_fv_btn > a");
		var $fvClose = $("#header .area2 .util .me_fullview .close_btn");
		var $mefull = $("#header .area2 .util .me_fullview");
		var $hamBtn = $("#header .area2 .ham_btn button");
		var link = "https://kyc9575.cafe24.com/index2.html";

		$(window).on("resize", function () {
			var wid = $(this).outerWidth();
			var hei = $(this).outerHeight();
			var hdH = $("#header").outerHeight();
			var tlW = $("#main .cnt1 .area .top .left").outerWidth();
			var tlH = $("#main .cnt1 .area .top .left ul li img").outerHeight();

			if (wid > 1280) {
				$("#main .cnt1 .area .top .left").css("height", tlH);
				$("#main .cnt1 .area .top .right").css("height", tlH);
			} else {
				$("#main .cnt1 .area .top .left").css("height", "auto");
			}

			if (wid < 1280) {
				$("#gateS11 .cnt1").css("height", hei - hdH);
			} else {
				$("#gateS11 .cnt1").css("height", "919px");
			}

			if (wid < 501) {
				$("#header .full_menu")
					.css("height", hei - 70)
					.addClass("on");
			} else if (wid < 721) {
				$("#header .full_menu")
					.css("height", hei - 90)
					.addClass("on");
			} else {
				$("#header .full_menu").css("height", "468px");
			}

			$("#header .full_menu.on > ul > li h3").click(function () {
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

		$hamBtn.on("click", function () {
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
		});

		$("#header .area2 .util .mb_me_fv_btn").on("click", function () {
			$fvBtn.click();
		});

		$("#main .cnt1 .area .top .right ul li").on({
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
	}
	gate();

	function gateS11() {
		$("#gateS11 .cnt2 .area .txt .tab_split .tab_btn li a").on(
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
	}
	gateS11();

	function gateS21() {
		$("#gateS21 .cnt2 .area .tab_split .tab_btn li a").on("click", function () {
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
		});
	}
	gateS21();

	function gateS31() {
		$("#gateS31 .cnt1 .area .txt .tab_split .tab_btn li a").on(
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
	}
	gateS31();

	function gateS32() {
		$("#gateS32 .cnt1 .area .txt .tab_split .tab_btn li a").on(
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
			"#gateS32 .cnt1 .area .txt .tab_split .tab_cnt > div .btn_wrap .req_brf",
		).on("click", function () {
			$("#offReqPu").css("display", "block");
			$("#black").css("display", "block");
			return false;
		});

		$("#offReqPu .close_btn").on("click", function () {
			$(this).parent().css("display", "none");
			$("#black").css("display", "none");
		});

		$(
			"#gateS32 .cnt1 .area .txt .tab_split .tab_cnt > div .btn_wrap .req_inq",
		).on("click", function () {
			$("#offReqIqPu").css("display", "block");
			$("#black").css("display", "block");
			return false;
		});

		$("#offReqIqPu .close_btn").on("click", function () {
			$(this).parent().css("display", "none");
			$("#black").css("display", "none");
		});
	}
	gateS32();

	function gateS33() {
		$("#gateS33 .cnt1 .area .txt .tab_split .tab_btn li a").on(
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
	}
	gateS33();

	function gateS34() {
		$("#gateS34 .cnt1 .area .txt .tab_split .tab_btn li a").on(
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
			"#gateS34 .cnt1 .area .txt .tab_split .tab_cnt > div .btn_wrap .req_brf",
		).on("click", function () {
			$("#onReqPu").css("display", "block");
			$("#black").css("display", "block");
			return false;
		});

		$("#onReqPu .close_btn").on("click", function () {
			$(this).parent().css("display", "none");
			$("#black").css("display", "none");
		});

		$(
			"#gateS34 .cnt1 .area .txt .tab_split .tab_cnt > div .btn_wrap .req_inq",
		).on("click", function () {
			$("#onReqIqPu").css("display", "block");
			$("#black").css("display", "block");
			return false;
		});

		$("#onReqIqPu .close_btn").on("click", function () {
			$(this).parent().css("display", "none");
			$("#black").css("display", "none");
		});
	}
	gateS34();

	function gateS43() {
		$("#gateS43 .cnt1 .area .txt .txt1 ul li.txt1_1 a").on(
			"click",
			function () {
				$(this).parent().addClass("on").siblings().removeClass("on");
				$("#gateS43 .cnt1 .area .txt .txt_dn").css("display", "none");
				$("#filePopup").css("display", "block");
				$("#black").css("display", "block");
				return false;
			},
		);

		$("#filePopup .close_btn").on("click", function () {
			$(this).parent().css("display", "none");
			$("#black").css("display", "none");
		});

		$("#gateS43 .cnt1 .area .txt .txt1 ul li.txt1_2 a").on(
			"click",
			function () {
				$(this).parent().addClass("on").siblings().removeClass("on");
				$("#gateS43 .cnt1 .area .txt .txt_dn").css("display", "block");
				return false;
			},
		);
	}
	gateS43();
});
