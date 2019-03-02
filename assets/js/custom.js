$(document).ready(function() {
    // all custom jQuery will go here

    var $banner = $('#banner'); 
    var $header = $('#header');

    $(window).scroll(function () {

    	var yoffset = $(document).scrollTop();

    	if (yoffset >= $banner.outerHeight()) {
    		$header.addClass('scrolling');
    	}
    	else {
    		$header.removeClass('scrolling');

    	}

    });

    var maxFeedHeight = $('.main-container').outerHeight();

    $('.twitter-feed').css("max-height", maxFeedHeight);

	$('.slider').slick({
	    autoplay: true,
	    dots: true,
	    arrows: true,
	    responsive: [{ 
	        breakpoint: 500,
	        settings: {
	            dots: false,
	            arrows: false,
	            infinite: false,
	            slidesToShow: 2,
	            slidesToScroll: 2
	        } 
	    }]
	});

	
	
});