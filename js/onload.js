/*
 *  Author: Rambod Rahmani <rambodrahmani@yahoo.it>
 */

 $(document).ready(function () {

    $('#myCarousel').carousel({
        interval: 0
    })
    
    $('#myCarousel').on('slid.bs.carousel', function() {
        //alert("slid");
    });
    
    /*
    var visited = Cookies("berlintalentsummit2016_visited");
    if (visited == null) {
       $('.newsletter_layer').show();
       Cookies('berlintalentsummit2016_visited', 'yes');
       $(".player").mb_YTPlayer();
    }
    else {
        Cookies('berlintalentsummit2016_visited', 'yes', { expires: 1, path: '/' });
    }
    */

    var responseSuccess = $('#contact-form .ajax-response-success');
    responseSuccess.fadeOut(500);
   	responseSuccess = $('#subscription-form .ajax-response-success');
    responseSuccess.fadeOut(500);
    responseSuccess = $('#subscription-form-2 .ajax-response-success');
    responseSuccess.fadeOut(500);

    /* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){

			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

    /* ---------------------------------------------- /*
	 * WOW Animation When You Scroll
	/* ---------------------------------------------- */

	wow = new WOW({
		mobile: false
	});
	wow.init();


	/* ---------------------------------------------- /*
	 * E-mail validation
	/* ---------------------------------------------- */

	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		return pattern.test(emailAddress);
	};

	/* ---------------------------------------------- /*
	 * Contact form ajax
	/* ---------------------------------------------- */

	$('#contact-form').submit(function(e) {
		
		e.preventDefault();

		var c_name = $('#c_name').val();
		var c_email = $('#c_email').val();
		var c_message = $('#c_message ').val();
		var response = $('#contact-form .ajax-response');
		var responseSuccess = $('#contact-form .ajax-response-success');

		var formData = {
			'name'       : c_name,
			'email'      : c_email,
			'message'    : c_message
		};

		if (( c_name== '' || c_email == '' || c_message == '') || ( c_name== 'undefined' || c_email == 'undefined' || c_message == 'undefined') || (!isValidEmailAddress(c_email) )) {
			response.fadeIn(500);
			response.html('<i class="fa fa-warning"></i> Please fix the errors and try again.');
		}
		else {
			$.ajax({
				type        : 'POST',
				url         : 'php/contact.php',
				data        : formData,
				dataType    : 'json',
				encode      : true,
				success		: function(res){
								response.fadeOut(500);
								responseSuccess.fadeIn(500);
							}
			});
		}

        return false;
	});

	/* ---------------------------------------------- /*
	 * Subscribe form ajax
	/* ---------------------------------------------- */

	$('#subscription-form').submit(function(e) {
		
		e.preventDefault();

		var s_email = $('#s_email').val();
		var s_message = "Subscription request for berlin-talent-summit.com";
		var response = $('#subscription-form .ajax-response');
		var responseSuccess = $('#subscription-form .ajax-response-success');

		var formData = {
			'name'       : "Subscription request.",
			'email'      : s_email,
			'message'    : s_message
		};

		if (( s_email == '' ) || ( s_email == 'undefined' ) || ( !isValidEmailAddress(s_email) )) {
      responseSuccess.fadeOut(500);
			response.fadeIn(500);
			response.html('<i class="fa fa-warning"></i> Please fix the errors and try again.');
		}
		else {
			$.ajax({
				type        : 'POST',
				url         : 'php/contact.php',
				data        : formData,
				dataType    : 'json',
				encode      : true,
				success		: function(res){
								response.fadeOut(500);
								responseSuccess.fadeIn(500);
							}
			});
		}

        return false;

	});

  /* ---------------------------------------------- /*
   * Subscribe form ajax 2
  /* ---------------------------------------------- */

  $('#subscription-form-2').submit(function(e) {
    
    e.preventDefault();

    var s_email = $('#s_email_2').val();
    var s_message = "Subscription request for berlin-talent-summit.com";
    var response = $('#subscription-form-2 .ajax-response');
    var responseSuccess = $('#subscription-form-2 .ajax-response-success');

    var formData = {
      'name'       : "Subscription request.",
      'email'      : s_email,
      'message'    : s_message
    };

    if (( s_email == '' ) || ( s_email == 'undefined' ) || ( !isValidEmailAddress(s_email) )) {
      responseSuccess.fadeOut(500);
      response.fadeIn(500);
      response.html('<i class="fa fa-warning"></i> Please fix the errors and try again.');
    }
    else {
      $.ajax({
        type        : 'POST',
        url         : 'php/contact.php',
        data        : formData,
        dataType    : 'json',
        encode      : true,
        success   : function(res){
                response.fadeOut(500);
                responseSuccess.fadeIn(500);
              }
      });
    }

        return false;

  });

    setTimeout(function() {
        $(".player").mb_YTPlayer();
      },
    3000);

    window.setTimeout(function() {
        $('.bts2016-heading').addClass('addVisibility animated fadeInUp');

        window.setTimeout(function() {
            $(".mbYTP_wrapper").fadeTo(4000, 0, function(){
                $(this).remove();
            });

            $(".bgndVideo").fadeTo(4000, 0, function(){
                $(this).remove();
            });

            $(".playerBox").fadeTo(4000, 0, function(){
                $(this).remove();
            });

            $(".YTPOverlay").fadeTo(4000, 0, function(){
                $(this).remove();
            });

            window.setTimeout(function() {
                $(".intro").attr("style", "");

            }, 5000);

        }, 130000);

    }, 1000);

    function sdf_FTS(_number,_decimal,_separator)
    {
        var decimal=(typeof(_decimal)!='undefined')?_decimal:2;
        var separator=(typeof(_separator)!='undefined')?_separator:'';
        var r=parseFloat(_number)
        var exp10=Math.pow(10,decimal);
        r=Math.round(r*exp10)/exp10;
        rr=Number(r).toFixed(decimal).toString().split('.');
        b=rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1"+separator);
        r=(rr[1]?b+'.'+rr[1]:b);

        return r;
    }
 });

$(function() {
    var countersTop = $('#counters').offset().top - window.innerHeight;

    $(window).on('scroll', function () {
        var pTop = $(document).scrollTop();

        if( pTop > countersTop ){
            start_count();
        }
    });
});

 function start_count(){
   var curval=parseInt($('#counter').text());
   if(curval == 0){
     setInterval(function(){
         var curval=parseInt($('#counter').text());
         /*var curval1=parseInt($('#counter1').text().replace(' ',''));*/
         var curval1=parseInt($('#counter1').text());
         var curval2=parseInt($('#counter2').text());
         var curval3=parseInt($('#counter3').text());
         if(curval<300){
             $('#counter').text(curval+1);
         }
         if(curval1<50){
             $('#counter1').text(curval1+1);
             /*$('#counter1').text(sdf_FTS((curval1+10),0,' '));*/
         }
         if(curval2<3){
             $('#counter2').text(curval2+1);
         }
         if(curval3<1){
             $('#counter3').text(curval3+1);
         }
     }, 50);
   }
 }

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 250) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

// WAYPOINTS
$(function() {

  $('.heading-row').waypoint(function() {
    $('.heading-row').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

  $('.subheading-row-Left').waypoint(function() {
    $('.subheading-row-Left').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.subheading-row-Right').waypoint(function() {
    $('.subheading-row-Right').addClass('animated bounceInRight');
  }, {
    offset: '85%'
  });

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated bounceInRight');
  }, {
    offset: '85%'
  });

  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated bounceInRight');
  }, {
    offset: '85%'
  });

  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated bounceInRight');
  }, {
    offset: '85%'
  });

  $('.wp7').waypoint(function() {
    $('.wp7').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.wp8').waypoint(function() {
    $('.wp8').addClass('animated bounceInRight');
  }, {
    offset: '85%'
  });

});
