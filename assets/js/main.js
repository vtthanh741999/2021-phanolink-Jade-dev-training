$(document).ready(function () {
    $('.nav__burger').click(function () {
        $('.nav__bar').toggleClass('change');
    })
    $('menu__item').click(function () {

    })
    // ======= slick carousel =========
    $('.content__left').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // ======== hot sale carousel=======
    $('.hot__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // ======== product carousel=======
    $('.slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // ======== trademark carousel======
    $('.trademark__content').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        prevArrow: '.trademark__prev',
        nextArrow: '.trademark__next',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // scroll change header 
    $(window).scroll(function(e) {
        const scroll_top = document.documentElement.scrollTop;
        const header_width = $('#header').innerWidth();
        const header_hight = $('#header').innerHeight();
        if (scroll_top >= header_hight && header_width >= 767) {
            $('.header--scroll').css('display','block');
        }
        else {
            $('.header--scroll').css('display','none');
        }
    })


    // ========= cart ========

    // ======== login and register ======
    $('.cart__header p').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        let status = $(this).attr('status');
        if (status === 'register') {
            $('.cart__register').css('display','block');
            $('.cart__login').css('display','none');

        }
        else {
            $('.cart__register').css('display','none');
            $('.cart__login').css('display','block');
        }
    })

    // ======= check buy ======== 
    $('.buy__content > button').click(function() {
        if($("input:radio").is(":checked")) {
            window.location.href = "cart-buy--successful.html";
        }
        else {
            window.location.href = "cart-buy-error.html";
        }
    })
})
