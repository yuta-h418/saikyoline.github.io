
// スライドショー

// $(function () {
//     $('#prev').click(function () {
//         $('.slideshow').animate({ 'margin-left': '152px' });
//     });
// });

// $(function () {
//     $('#next').click(function () {
//         $('.slideshow').animate({ 'margin-left': '-1768px' });
//     });
// });

// $(function(){
//     $('.slideshow').slick({
//             // accessibility:true,
//             autoplay : false,
//             autoplaySpeed : 3000


//             // pause : 2000
//     });
// });

//slider

$(function () {
    $("#next").on("click", function () {
        var index = $(".slider").data("index");
        if (index < 5) {
            var next = index + 1;
            var ml = 152 - 960 * (index + 1);
            $(".slideshow").animate({ marginLeft: ml + "px"});
            $(".slider").data("index", next);
        }
    });
});

$(function () {
    $("#prev").on("click", function () {
        var index = $(".slider").data("index");
        if (index > 0 && index < 6) {
            var next = index - 1;
            var ml = 152 - 960 * (index - 1);
            $(".slideshow").animate({ marginLeft: ml + "px"});
            $(".slider").data("index", next);
        }
    });
});



//slider_dots

$(function () {
    $(".dots1").click(function () { 
        $(".slideshow").animate({"margin-left" : "152px"}),1500;
    });
});

$(function () {
    $(".dots2").click(function () { 
        $(".slideshow").animate({"margin-left" : "-808px"}),1000;
    });
});

$(function () {
    $(".dots3").click(function () { 
        $(".slideshow").animate({"margin-left" : "-1768px"}), 1000;
    });
});

$(function () {
    $(".dots4").click(function () { 
        $(".slideshow").animate({"margin-left" : "-2728px"}), 1000;
    });
});

$(function () {
    $(".dots5").click(function () { 
        $(".slideshow").animate({"margin-left" : "-3688px"}), 1000;
    });
});

$(function () {
    $(".dots6").click(function () { 
        $(".slideshow").animate({"margin-left" : "-4648px"}), 1000;
    });
});




// contets

$(function () {
    $('.img1,.img2,.img3,.img5,.img6,.img7,.img8,.img10,.img12').hover(function () {
        $(this).stop().animate({
            'width': '359px',
            'height': '278px',
        }, 'slow');
    },
        function () {
            $(this).stop().animate({
                'width': '309px',
                'height': '228px'
            }, 'slow');
        });
});

$(function () {
    $('.img4,.img9,.img11').hover(function () {
        $(this).stop().animate({
            'width': '658px',
            'height': '330px',
        }, 'slow');
    },
        function () {
            $(this).stop().animate({
                'width': '628px',
                'height': '300px'
            }, 'slow');
        });
});



// totop

$(function () {
    $('.totop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });

});
