﻿$(document).ready(function () {

    // video home
    var owl = $("#owl-demo");
    owl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 700,
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        navigation: true,
        itemsDesktop: [1199, 3],
        itemsTablet: [600, 2],
        itemsDesktopSmall: [900, 3],
        itemsMobile: [479, 2],
        pagination: false,
        lazyLoad: true
    });
    owl.trigger('owl.play', 200);
    $(".next_slider").click(function () {

        owl.trigger("owl.next")
    }).css("margin", 0);
    $(".prev_slider").click(function () { owl.trigger("owl.prev") }).css("margin", 0);

    // Khối văn bản trang chủ
    $('.van-ban ul').slick({
        rows: 10,
        prevArrow: '<button type="button" class="btn btn-sm left slick-prev"><span class="fa fa-angle-left"></span> Trước</button>',
        nextArrow: '<button type="button" class="btn btn-sm right slick-next">Sau <span class="fa fa-angle-right"></span></button>'

    })

});
