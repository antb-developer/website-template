// antb development


$(window).scroll(function() {
    if ($(".navbar").offset().top > 30) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand").addClass("navbar-brand2");
        $("ul li").css('padding-top','8px');
		$('.navbar-brand,ul li').css('transition','all 0.5s');
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").removeClass("navbar-brand2");
        $("ul li").css('padding-top','18px');
    }
});


$(document).ready(function() {
    if ($(".navbar").offset().top > 30) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand").addClass("navbar-brand2");
        $("ul li").css('padding-top','8px');
		$('.navbar-brand,ul li').css('transition','all 0.5s');
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").removeClass("navbar-brand2");
        $("ul li").css('padding-top','18px');
    }
});

