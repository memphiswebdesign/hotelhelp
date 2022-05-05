// Scroll add header class
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 85) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }
});

// Mobile Toggle
$("button.hamburger").click(function() {
  $(this).toggleClass("active");
  $("#mobile-menu").toggleClass("active");
  $("body").toggleClass("locked");
});

// Isitope Init script
$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
});
// filter items on button click
$('.filters').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
    $('.filters li').removeClass('active');
    $(this).addClass('active');
});
