// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
var $grid = $('.portfolio-pregn').masonry({
    itemSelector: '.portfolio-pregn__item',
    columnWidth: '.portfolio-pregn__sizer',
    gutter: 10,
    percentPosition: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});