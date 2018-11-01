'use strict'; 
$(window).load( function() {

    var sendEmailForm = $('.send_email_form');
    var sendMessageForm = $('.send_message_form');
    
    var newsletterServerUrl = './ajaxserver/serverfile.php';
    var messageServerUrl = './ajax/contact.php';

    // Use form define action attribute
    if (sendEmailForm.attr('action') && (sendEmailForm.attr('action')) != '') {
        newsletterServerUrl = sendEmailForm.attr('action');
    }
    if (sendMessageForm.attr('action') && (sendMessageForm.attr('action') != '')) {
        messageServerUrl = sendMessageForm.attr('action');
    }

    sendEmailForm.initForm({
        serverUrl: newsletterServerUrl,
    });
    sendMessageForm.initForm({
        serverUrl: messageServerUrl,
    });
    

    // LIGHTBOX VIDEO
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
        
//PRELOADER
        /** Loader */
    var loader = $(".loader");
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var o = 0;

    loader.css({
        top: wHeight / 2 - 2.5,
        left: wWidth / 2 - 200
    })

    do {
        loader.animate({
            width: o
        }, 10)
        o += 3;
    } while (o <= 400)
    if (o === 402) {
        loader.animate({
            left: 0,
            width: '100%'
        })
        loader.animate({
            top: '0',
            height: '100vh'
        })
    }

    setTimeout(function() {
        $(".loader-wrapper").fadeOut('fast');
        (loader).fadeOut('fast');
    }, 3500);

    

    // PORTFOLIO ISOTOPE
if ($('.isotope_items').length) {

     var $container = $('.isotope_items');
     $container.isotope();

    $('.portfolio_filter ul li').on("click", function(){
        $(".portfolio_filter ul li").removeClass("select-cat");
        $(this).addClass("select-cat");				 
        var selector = $(this).attr('data-filter');
        $(".isotope_items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
    });
        return false;
    });  
    
}
    
}); // window load end 



$(document).ready( function() {	
    
    
    // WOW JS
    new WOW({ mobile: false }).init();
    
    
      
    //SMOOTH SCROLL
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
             if ($(window).width() < 768) {
                 $('.nav-menu').slideUp();
             }
        });
            
        $(this).addClass('active');
      
        var target = this.hash,
        menu = target;
        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target.selector;
            $(document).on("scroll", onScroll);
        });
    });
    
        
        function onScroll(event){
          if ($('#home').length) {     
    var scrollPos = $(document).scrollTop();
    $('nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
   }              
}


    
    
    //NAVBAR SHOW - HIDE
    $(window).scroll(function() {				
    var scroll = $(window).scrollTop();
    var homeheight = $(".home").height() -86;			

    if (scroll > homeheight ) {												
        $("nav").slideDown(100);
        } else {
        $("nav").slideUp(100);
        }
     }); 
    
    	
 // RESPONSIVE MENU
$('.responsive').on('click', function (e) {
        $('.nav-menu').slideToggle();
    });
    
    
    // HOME PAGE HEIGHT
     function centerInit() {
        var hometext = $('.home')

        hometext.css({
            "height": $(window).height() + "px"
        });
    }
    centerInit();
    $(window).resize(centerInit);
    
    
    // HOME TYPED JS
    if ($('.element').length) {
        $('.element').each(function () {
            $(this).typed({
              strings: [
                $(this).data("text1"),
                $(this).data("text2"),
                $(this).data("text3"),
                $(this).data("text4")
              ],
              loop: $(this).data("loop")
                ? $(this).data("loop")
                : false,
              backDelay: $(this).data("backdelay")
                ? $(this).data("backdelay")
                : 2000,
              typeSpeed: 10
            });
        });
    }
 
    
    
    // MAGNIFIC POPUP FOR PORTFOLIO PAGE
    $('.link').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        zoom:{enabled: true, duration: 300}
    });
    
       // OWL CAROUSEL GENERAL JS
    var owlcar = $('.owl-carousel');
    if (owlcar.length) {
        owlcar.each(function () {
            // var $owl = $(this);
            // var itemsData = $owl.data('items');
            // var autoPlayData = $owl.data('autoplay');
            // var paginationData = $owl.data('pagination');
            // var navigationData = $owl.data('navigation');
            // var stopOnHoverData = $owl.data('stop-on-hover');
            // var itemsDesktopData = $owl.data('items-desktop');
            // var itemsDesktopSmallData = $owl.data('items-desktop-small');
            // var itemsTabletData = $owl.data('items-tablet');
            // var itemsTabletSmallData = $owl.data('items-tablet-small');
            // $owl.owlCarousel({
            //     items: itemsData
            //     , pagination: paginationData
            //     , navigation: navigationData
            //     , autoPlay: autoPlayData
            //     , stopOnHover: stopOnHoverData
            //     , navigationText: ["<", ">"]
            //     , itemsCustom: [
            //         [0, 1]
            //         , [500, itemsTabletSmallData]
            //         , [710, itemsTabletData]
            //         , [992, itemsDesktopSmallData]
            //         , [1199, itemsDesktopData]
            //     ]
            // , });
        });
    }

    $(".js-partners").owlCarousel({
      autoplay: true,
      loop: true,
      dots: false,
      nav: false,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2
        },
        320: {
          items: 2
        },
        480: {
          items: 2
        },
        552: {
          items: 4
        },
        768: {
          items: 5,
          margin: 20
        },
        1000: {
          items: 6,
          margin: 20
        }
      }
    });

    var conCar = $(".js-contact-carousel");
    // conCar.on("initialize.owl.carousel", function (e) {
    //     console.log('hello')
    // });
    conCar.owlCarousel({
      items: 1,
      autoplay: false,
      loop: true,
      nav: false,
      dots: true,
    //   responsiveClass: true,
    //   responsive: {
    //     0: {
    //       items: 1,
    //     },
    //     320: {
    //       items: 1
    //     },
    //     480: {
    //       items: 1
    //     },
    //     552: {
    //       items: 1
    //     },
    //     768: {
    //       items: 1
    //     },
    //     1000: {
    //       items: 1
    //     }
    //   },
      
    });



    $(".js-advertiser").on('click', function(e) {
        conCar.trigger("to.owl.carousel", [1, 500, true]);
        e.preventDefault();
    });
    
    $(".js-publisher").on("click", function(e) {
        conCar.trigger("to.owl.carousel", [2, 500, true]);
        e.preventDefault();
    });
    $(".js-info").on("click", function(e) {
        conCar.trigger("to.owl.carousel", [0, 500, true]);
        e.preventDefault();
    });

    $(".js-brands").owlCarousel({
      autoplay: true,
      loop: true,
      dots: true,
    //   nav: true,
    //   margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2
        },
        320: {
          items: 2
        },
        480: {
          items: 2
        },
        552: {
          items: 4
        },
        768: {
          items: 5,
          margin: 20
        },
        1000: {
          items: 6,
          margin: 20
        }
      }
    });

    $(".js-team-carousel").owlCarousel({
      autoplay: true,
      loop: false,
      margin: 20,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    
    
}); // document ready end 



/* Contact Form JS*/
(function($){
   'use strict'; 
   
   $(".contact-form").on('submit', function(e){
        e.preventDefault();
        
        var uri = $(this).attr('action');
        $("#con_submit").val('Wait...');
        var con_name = $("#con_name").val();
        var con_email = $("#con_email").val();
        var con_message = $("#con_message").val();
        
        var required = 0;
        $(".requie", this).each(function() {
            if ($(this).val() == '')
            {
                $(this).addClass('reqError');
                required += 1;
            }
            else
            {
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0)
        {
            $.ajax({
                type: "POST",
                url: 'mail.php',
                data: {con_name: con_name, con_email: con_email, con_message: con_message},
                success: function(data)
                {
                    $(".contact-form input, .contact-form textarea").val('');
                    $("#con_submit, .sitebtn").val('Done!');
					$("#con_submit .sitebtn").addClass("ok");
                }
            });
        }
        else
        {
            $("#con_submit, .sitebtn").val('Failed!');
        }
   });
   $(".requie").keyup(function() {
        $(this).removeClass('reqError');
    });


    // hover effect
    $('.hover-effect').append('<div class="overlay"></div>');

    //Detect Closest Edge
    function closestEdge(x, y, w, h) {
        var topEdgeDist = distMetric(x, y, w / 2, 0);
        var bottomEdgeDist = distMetric(x, y, w / 2, h);
        var leftEdgeDist = distMetric(x, y, 0, h / 2);
        var rightEdgeDist = distMetric(x, y, w, h / 2);
        var min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);
        console.log(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);
        console.log(x, y)
        switch (min) {
            case leftEdgeDist:
                return "left";
            case rightEdgeDist:
                return "right";
            case topEdgeDist:
                return "top";
            case bottomEdgeDist:
                return "bottom";
        }
    }

    //Distance Formula
    function distMetric(x, y, x2, y2) {
        var xDiff = x - x2;
        var yDiff = y - y2;
        return (xDiff * xDiff) + (yDiff * yDiff);
    }


    var boxes = document.querySelectorAll(".hover-effect");

    for (var i = 0; i < boxes.length; i++) {

        boxes[i].onmouseenter = function (e) {
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
            var overlay = this.childNodes[3];
            var image = this.childNodes[1];

            switch (edge) {
                case "left":
                    //tween overlay from the left
                    overlay.style.top = "0%";
                    overlay.style.left = "-100%";
                    TweenMax.to(overlay, .5, { left: '0%' });
                    // TweenMax.to(image, .5, { scale: 1.2 });
                    break;
                case "right":
                    overlay.style.top = "0%";
                    overlay.style.left = "100%";
                    //tween overlay from the right
                    TweenMax.to(overlay, .5, { left: '0%' });
                    // TweenMax.to(image, .5, { scale: 1.2 });
                    break;
                case "top":
                    overlay.style.top = "-100%";
                    overlay.style.left = "0%";
                    //tween overlay from the right
                    TweenMax.to(overlay, .5, { top: '0%' });
                    // TweenMax.to(image, .5, { scale: 1.2 });
                    break;
                case "bottom":
                    overlay.style.top = "100%";
                    overlay.style.left = "0%";
                    //tween overlay from the right
                    TweenMax.to(overlay, .5, { top: '0%' });
                    // TweenMax.to(image, .5, { scale: 1.2 });
                    break;
            }
        };


        boxes[i].onmouseleave = function (e) {
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
            var overlay = this.childNodes[3];
            var image = this.childNodes[1];

            console.log(edge)

            switch (edge) {
                case "left":
                    TweenMax.to(overlay, .5, { left: '-100%' });
                    // TweenMax.to(image, .5, { scale: 1.0 });
                    break;
                case "right":
                    TweenMax.to(overlay, .5, { left: '100%' });
                    // TweenMax.to(image, .5, { scale: 1.0 });
                    break;
                case "top":
                    TweenMax.to(overlay, .5, { top: '-100%' });
                    // TweenMax.to(image, .5, { scale: 1.0 });
                    break;
                case "bottom":
                    TweenMax.to(overlay, .5, { top: '100%' });
                    // TweenMax.to(image, .5, { scale: 1.0 });
                    break;
            }
        };
    }
   
})(jQuery);