$(document).ready(function() {

    /*
    * set home op active bij eerste page load
    * FIXME: window.location gedoe is een lelijke hack
    * TODO: als je naar een blog pagina gaat moet de pagina omhoogscrollen zodat de header uit beeld is en het menu boven tegen de pagina staat
    */
    if (window.location.pathname === '/geografisch/' || window.location.pathname === '/geografisch/index.html') {
        $('li.home').addClass('active');
    }
    

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
    */
    var menu_list_items = $('#main-menu li');
    menu_list_items.each(function(index, value) {
        // haal de section ids uit het data-attribute in het menu
        var section_id = '#' + $(this).children(1).data('scrollto');
        var section = $(section_id);

        section.waypoint(function(e, direction) {
            if (direction === 'down') {
                $(value).prev().removeClass('active');
                $(value).addClass('active');
            }
            else {
                $(value).prev().addClass('active');
                if (index > 0) {
                    // als je voorbij 'home' scrollt moet de 'active'-class blijven staan
                    $(value).removeClass('active');
                }
            }
        }, {
            offset: 50
        });
    });
    

    /*
    * Scrolling: gebruik scrollTo library voor smooth scroll naar sections
    */
    $('#main-menu li a').click(function() {
        var target = '#' + $(this).data('scrollto');
        $.scrollTo(target, 500);
    });
});