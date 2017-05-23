$(document).ready(function() {
	$('#slidesContainer').owlCarousel({
		loop: true, //Зацикливаем слайдер
		nav: true, //Включил навигацию
		autoplay: true, //Автозапуск слайдера
        mouseDrag: true,
        touchDrag: true,
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 4000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
    $('#individualSlide').owlCarousel({
        loop: true, //Зацикливаем слайдер
        nav: true,
        items: 3,
		autoplay: true, //Автозапуск слайдера
        mouseDrag: true,
        touchDrag: true,
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 4000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
    });
    $('#textSlider').owlCarousel({
        loop: true, //Зацикливаем слайдер
        nav: true,
        items: 3,
		autoplay: false, //Автозапуск слайдера
        mouseDrag: true,
        touchDrag: true,
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 4000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
    });
    $('#reviewSlider').owlCarousel({
        loop: true, //Зацикливаем слайдер
        nav: true,
        items: 3,
		autoplay: false, //Автозапуск слайдера
        mouseDrag: true,
        touchDrag: true,
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 4000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
    });
    $('#gallerySlider').owlCarousel({
        loop: true, //Зацикливаем слайдер
        nav: true,
        items: 3,
		autoplay: false, //Автозапуск слайдера
        mouseDrag: true,
        touchDrag: true,
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 4000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
    });
    $('#albumSlider').owlCarousel({
        loop: true, //Зацикливаем слайдер
        nav: false,
        items: 3,
		autoplay: true, //Автозапуск слайдера
        mouseDrag: true,
        touchDrag: true,
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 4000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
    });
});