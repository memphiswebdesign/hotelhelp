$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 85) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }
});

