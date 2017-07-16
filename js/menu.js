'use strict';

var $cross = $('.burger--cross'),
    $menu = $('.main-nav__items'),
    $burger = $('.burger');
    
$cross.hide();
$menu.hide();

$burger.on('click', function() {
    $menu.slideToggle('slow', function() {
        $burger.hide();
        $cross.show();
    });
});

$cross.on('click', function() {
    $menu.slideToggle('slow', function() {
        $cross.hide();
        $burger.show();
    });
});
