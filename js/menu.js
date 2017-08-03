'use strict';

$(document).ready(function() {
    
    var $cross = $('.burger--cross'),
    $menu = $('.main-nav__items'),
    $burger = $('.burger');
    
    $burger.on('click', function() {
        $menu.slideToggle(500);
    });
    $(window).resize(function() {
        if($(window).width() > 960) {
            $menu.removeAttr('style');
        }
    });
});
