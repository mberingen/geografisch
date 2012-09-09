$(document).ready(function() {

    /*
    * set home op active bij eerste page load
    */
    if (window.location.pathname === '/geografisch/') {
        $('li.home').addClass('active');    
    };
    

    /*
    * Sticky menu: set menu class fixed als user voorbij de header scrollt
    */
    var main_menu = $('#main-menu');

    var top = main_menu.offset().top - parseFloat(main_menu.css('marginTop').replace(/auto/, 0));
    $(window).scroll(function(event) {
        var y = $(this).scrollTop();
        if (y >= top) {
            main_menu.addClass('fixed');
        } else {
            main_menu.removeClass('fixed');
        }
    });


    /*
    * Waypoints voor active menu items
    * TODO: needs cleanup
    */
    $('#home').waypoint(function(e, direction) {
        if (direction === 'down') {
            $('li.portfolio').removeClass('active');
            $('li.home').addClass('active');
        }
    }, {
            offset: 10
    });

    $('#portfolio').waypoint(function(e, direction) {
        if (direction === 'down') {
            $('li.home').removeClass('active');
            $('li.portfolio').addClass('active');
        } else {
            $('li.home').addClass('active');
            $('li.portfolio').removeClass('active');
        }                    
    }, {
            offset: 10
    });

    $('#blog').waypoint(function(e, direction) {
        if (direction === 'down') {
            $('li.portfolio').removeClass('active');
            $('li.blog').addClass('active');
        } else {
            $('li.portfolio').addClass('active');
            $('li.blog').removeClass('active');
        }                    
    }, {
            offset: 10
    });
    
    $('#contact').waypoint(function(e, direction) {
        if (direction === 'down') {
            $('li.blog').removeClass('active');
            $('li.contact').addClass('active');
        } else {
            $('li.blog').addClass('active');
            $('li.contact').removeClass('active');
        }                    
    }, {
            offset: 10
    });

    /*
    * Scrolling: gebruik scrollTo library voor smooth scroll naar sections
    */
    $('#main-menu li a').click(function() {
        var target = '#' + $(this).data('scrollto');
        $.scrollTo(target, 500);
    });
});