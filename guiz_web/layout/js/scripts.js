(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        // 01. START PRELOADER
        $(window).load(function() {
            // Animate loader off screen
            $(".preloader").fadeOut("slow");
        });
        // 01. END PRELOADER

        // 02. START MENU STICKY JS
        $(".header-top-area").sticky({
            topSpacing: 0,
        });
        // 02. END MENU STICKY JS

        // 03. START SMOTH SCROOL JS
        $('a.smooth-scroll').on("click",
            function(e) {
                var anchor = $(this);
                $('html, body').stop().animate({
                        scrollTop: $(anchor.attr('href')).offset().top - 75
                    },
                    1200);
                e.preventDefault();
            });
        // 03. END SMOTH SCROOL JS

        // 04. START SCROOLSPY JS
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 80
        });
        // 04. END SCROOLSPY JS

        // 05. START TOGGLE DROPDOWN JS
        $(document).on('click',
            '.navbar-collapse.in',
            function(e) {
                if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                    $(this).collapse('hide');
                }
            });
        // 05. END TOGGLE DROPDOWN JS

        // 06. START SERVICE CAROUSEL JS
        // $('#service-carousel').owlCarousel({
        //     loop:true,
        // 	margin:0,
        // 	nav:false,
        // 	autoplay:true,
        // 	smartSpeed:900,
        //     autoplayTimeout:2000,
        //     autoplayHoverPause:true,
        //     responsiveClass:true,
        //     responsive:{
        //         0:{
        //             items:1,
        //         },
        //         600:{
        //             items:2,
        //         },
        //         1000:{
        //             items:3,
        //         }
        //     }
        // });
        // 06. END SERVICE CAROUSEL JS

        // 07. START TEAM CAROUSEL JS
        // $('#team-carousel').owlCarousel({
        //     loop:true,
        // 	margin:0,
        // 	nav:false,
        // 	autoplay:true,
        // 	smartSpeed:900,
        //     autoplayTimeout:2000,
        //     autoplayHoverPause:true,
        //     responsiveClass:true,
        //     responsive:{
        //         0:{
        //             items:1,
        //         },
        //         600:{
        //             items:2,
        //         },
        //         1000:{
        //             items:3,
        //         }
        //     }
        // });
        // 07. END TEAM CAROUSEL JS

        // 08. START PARTNER CAROUSEL JS
        // $('#partner-carousel').owlCarousel({
        //     loop:true,
        // 	margin:0,
        // 	nav:false,
        // 	autoplay:true,
        // 	smartSpeed:900,
        //     autoplayTimeout:2000,
        //     autoplayHoverPause:true,
        //     responsiveClass:true,
        //     responsive:{
        //         0:{
        //             items:1,
        //         },
        //         600:{
        //             items:3,
        //         },
        //         1000:{
        //             items:6,
        //         }
        //     }
        // });
        // 08. END PARTNER CAROUSEL JS

        // 09. START PORTFOLIO MIXITUP JS
        // jQuery('.grid').mixitup({
        // 	targetSelector: '.mix'
        // });
        // 09. END PORTFOLIO MIXITUP JS

        // 10. START VENOBOX JS
        // $('.image-popup').venobox({
        // 	numeratio: true,
        // 	infinigall: true
        // });
        // 10. END VENOBOX JS

        // 11. START COUNTDOWN JS
        $('.counter, .progress').on('inview',
            function(event, visible, visiblePartX, visiblePartY) {
                if (visible) {
                    $(this).find('.timer').each(function() {
                        var $this = $(this);
                        $({ Counter: 0 }).animate({ Counter: $this.text() },
                            {
                                duration: 3000,
                                easing: 'swing',
                                step: function() {
                                    $this.text(Math.ceil(this.Counter));
                                }
                            });
                    });
                    $(this).unbind('inview');
                }
            });
        // 11. END COUNTDOWN JS

        // 12. START AJAXCHIMP JS
        // $('#mc-form').ajaxChimp();
        // 12. END AJAXCHIMP JS

        // 13. START PARALLAX JS
        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
        // 13. END PARALLAX JS

        // 14. START GOOGLE MAP JS
        //  var myCenter=new google.maps.LatLng(-37.81137, 144.96102);
        //     function initialize(){
        // 		var mapProp = {
        // 			zoom:16,
        // 			center:myCenter,
        // 			scrollwheel: false,
        // 			styles: [ { "stylers": [ { "hue": "#ffffff" },  {saturation: -100},
        // 			{gamma: 2} ] } ],
        // 			mapTpeIdy:google.maps.MapTypeId.ROADMAP
        // 		};
        //         var map=new google.maps.Map(document.getElementById("contactgoogleMap"),mapProp);
        //     }
        //     google.maps.event.addDomListener(window, 'load', initialize);        
        // 14. END GOOGLE MAP JS

        $(function() {
            var inChartViews = false;

            $('#assessments-grid').on('shown.bs.collapse',
                function() {
                    var offset = $('#assessments-grid').offset();
                    offset.top -= 120;
                    $('html, body').animate({
                        scrollTop: offset.top
                    });
                });

            function isScrolledIntoView(elem) {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();

                var elemTop = $(elem).offset().top;
                var elemBottom = elemTop + $(elem).height();

                return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
            }

            $(window).scroll(function() {
                if (isScrolledIntoView('#charts')) {
                    if (inChartViews) {
                        return;
                    }
                    inChartViews = true;
                    new Chart(document.getElementById("miles-chart").getContext('2d'),
                        {
                            type: 'line',
                            data: {
                                labels: [
                                    "1 star", "2 stars", "3 stars", "4 stars",
                                    "5 stars"
                                ],
                                datasets: [
                                    {
                                        label: '# of miles in 5 weeks',
                                        data: [1632, 1653, 2102, 2020, 2377],
                                        backgroundColor: [
                                            'rgba(163, 192, 122, 0.7)',
                                            'rgba(163, 192, 122, 0.7)',
                                            'rgba(163, 192, 122, 0.7)',
                                            'rgba(163, 192, 122, 0.7)',
                                            'rgba(163, 192, 122, 0.7)'
                                        ],
                                        borderColor: [
                                            'rgba(163, 192, 122, 1)',
                                            'rgba(163, 192, 122, 1)',
                                            'rgba(163, 192, 122, 1)',
                                            'rgba(163, 192, 122, 1)',
                                            'rgba(163, 192, 122, 1)'
                                        ],
                                        borderWidth: 1
                                    }
                                ]
                            },
                            options: {
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                beginAtZero: false
                                            }
                                        }
                                    ]
                                }
                            }
                        });
                    new Chart(document.getElementById("injuries-chart").getContext('2d'),
                        {
                            type: 'bar',
                            data: {
                                labels: [
                                    "1 star", "2 stars", "3 stars", "4 stars",
                                    "5 stars"
                                ],
                                datasets: [
                                    {
                                        label: '# of injuries',
                                        data: [18, 18, 9, 3, 6],
                                        backgroundColor: [
                                            'rgba(255, 90, 90, 0.7)',
                                            'rgba(255, 90, 90, 0.7)',
                                            'rgba(255, 90, 90, 0.7)',
                                            'rgba(255, 90, 90, 0.7)',
                                            'rgba(255, 90, 90, 0.7)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 90, 90, 1)',
                                            'rgba(255, 90, 90, 1)',
                                            'rgba(255, 90, 90, 1)',
                                            'rgba(255, 90, 90, 1)',
                                            'rgba(255, 90, 90, 1)'
                                        ],
                                        borderWidth: 1
                                    }
                                ]
                            },
                            options: {
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                beginAtZero: false
                                            }
                                        }
                                    ]
                                }
                            }
                        });
                    new Chart(document.getElementById("misseddays-chart").getContext('2d'),
                        {
                            type: 'bar',
                            data: {
                                labels: [
                                    "1 star", "2 stars", "3 stars", "4 stars",
                                    "5 stars"
                                ],
                                datasets: [
                                    {
                                        label: '# of missed work days',
                                        data: [423, 423, 324, 39, 11],
                                        backgroundColor: [
                                            'rgba(133, 211, 220, 0.7)',
                                            'rgba(133, 211, 220, 0.7)',
                                            'rgba(133, 211, 220, 0.7)',
                                            'rgba(133, 211, 220, 0.7)',
                                            'rgba(133, 211, 220, 0.7)'
                                        ],
                                        borderColor: [
                                            'rgba(133, 211, 220, 1)',
                                            'rgba(133, 211, 220, 1)',
                                            'rgba(133, 211, 220, 1)',
                                            'rgba(133, 211, 220, 1)',
                                            'rgba(133, 211, 220, 1)'
                                        ],
                                        borderWidth: 1
                                    }
                                ]
                            },
                            options: {
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                beginAtZero: false
                                            }
                                        }
                                    ]
                                }
                            }
                        });
                } else {
                    inChartViews = false;
                }
            });

            var timelineBlocks = $('.cd-timeline-block'),
                offset = 0.8;

            //hide timeline blocks which are outside the viewport
            hideBlocks(timelineBlocks, offset);

            //on scolling, show/animate timeline blocks when enter the viewport
            $(window).on('scroll',
                function() {
                    (!window.requestAnimationFrame)
                        ? setTimeout(function() {
                                showBlocks(timelineBlocks, offset);
                            },
                            100)
                        : window.requestAnimationFrame(function() {
                            showBlocks(timelineBlocks, offset);
                        });
                });

            function hideBlocks(blocks, offset) {
                blocks.each(function() {
                    ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) &&
                        $(
                            this).find('.cd-timeline-img, .cd-timeline-content, .cd-timeline-icon').addClass(
                            'is-hidden');
                });
            }

            function showBlocks(blocks, offset) {
                blocks.each(function() {
                    ($(this).offset().top <=
                            $(window).scrollTop() +
                            $(window).height() *
                            offset &&
                            $(
                                this).find('.cd-timeline-img').hasClass('is-hidden')) &&
                        $(this).find(
                            '.cd-timeline-img, .cd-timeline-content, .cd-timeline-icon').removeClass(
                            'is-hidden').addClass(
                            'bounce-in');
                });
            }
        });
    });

    // 15. START WOW ANIMATION JS
    new WOW().init();
    // 15. END WOW ANIMATION JS

    $("#loginButton").click(function (event) {
        $("#loginMessage").text("");
        $("#lbl-login").text("Loading");
        $("#loader-login").show();
        event.preventDefault();

        var jsonData = JSON.stringify({
            email: $("#email").val(),
            password: $("#password").val(),
            rememberMe: $("#rememberMe").is(":checked")
        });

        $.ajax({
            type: "POST",
            url: "Default.aspx/LoginPartner",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response != null && response.d != null) {
                    var data = response.d;
                    data = $.parseJSON(data);
                    if (!data.Success) {
                        $("#loginMessage").text(data.ErrorMessage);
                    } else {
                        $("#loginMessage").text("");
                        window.location = "../Default1e9a.html";
                    }
                } else {
                    $("#loginMessage").text("An error occured. Please try again.");
                }

                $("#lbl-login").text("Submit");
                $("#loader-login").hide();
            },
            error: function(e) {
                $("#loginMessage").text("An error occured while logging you in. Please try again.");

                $("#lbl-login").text("Submit");
                $("#loader-login").hide();
            }
        });
    });

    $("#ContactUs").submit(function (event) {
        $("#contactMessage").text("");
        $("#contactMessage").removeClass("label-primary").addClass("label-danger");
        $("#lbl-send").text("Sending message");
        $("#loader-send").show();
        event.preventDefault();

        var jsonData = JSON.stringify({
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            companyName: $("#companyName").val(),
            contactEmail: $("#contactEmail").val(),
            phoneNumber: $("#phoneNumber").val(),
            message: $("#message").val()
        });

        $.ajax({
            type: "POST",
            url: "Default.aspx/SubmitContactForm",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response != null && response.d != null) {
                    var data = response.d;
                    data = $.parseJSON(data);
                    if (!data.Success) {
                        $("#contactMessage").text(data.ErrorMessage);
                    } else {
                        $("#firstName").val("");
                        $("#lastName").val("");
                        $("#companyName").val("");
                        $("#contactEmail").val("");
                        $("#phoneNumber").val("");
                        $("#message").val("");

                        $("#contactMessage").removeClass("label-danger").addClass("label-primary");
                        $("#contactMessage").text("Message sent!").delay(3000).fadeOut();
                    }
                } else {
                    $("#contactMessage").text("An error occured. Please try again.");
                }
                $("#lbl-send").text("Send message");
                $("#loader-send").hide();
            },
            error: function (e) {
                $("#contactMessage").text("An error occured while sending your message. Please try again.");
                $("#lbl-send").text("Send message");
                $("#loader-send").hide();
            }
        });
    });

})(jQuery);