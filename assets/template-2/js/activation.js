(function ($) {
    $(document).ready(function () {
        //hero slider
        $('#template-2-slider').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            loop: true,
            margin: 100,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        //slider animation
        $('#template-2-slider').on('translate.owl.carousel', function () {
            $('.slider-cont h2').removeClass('animated bounceInDown').css('opacity', '0');
            $('.slider-cont h1').removeClass('animated fadeInRight').css('opacity', '0');
            $('#template-2-slider .slider-btn-style').removeClass('animated fadeInUp').css('opacity', '0');
        });
        $('#template-2-slider').on('translated.owl.carousel', function () {
            $('.slider-cont h2').addClass('animated bounceInDown').css('opacity', '1');
            $('.slider-cont h1').addClass('animated fadeInRight').css('opacity', '1');
            $('#template-2-slider .slider-btn-style').addClass('animated fadeInUp').css('opacity', '1');
        });


        //featured-product-slider
        $('.product-slider').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                767: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });


        //popup-product-slier
        $('.popup-product-slier').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });


        //blog posts slider
        $('.blog-posts').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        //review-slide
        $('.review-slide').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        //sticky menu when scroll
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll > 90) {
                $(".header-area").addClass("sticky_top_section");
            } else {
                $(".header-area").removeClass("sticky_top_section");
            }
        });

        //mobile menu custom js
        $(".mobile-home-btn").on("click", function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });
        $(".mobile-menu-btn").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '0',
                'opacity': '1',
                'transition': 'all .5s',
            });
        });
        $("#close").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });
        $("ul.mobile-menu li a").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });

    });
})(jQuery);