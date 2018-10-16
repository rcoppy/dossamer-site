$(document).ready(function() {
    // all custom jQuery will go here

    $banner = $('#banner'); 
    $header = $('#header');

    $(window).scroll(function () {

    	var yoffset = $(document).scrollTop();

    	if (yoffset >= $banner.outerHeight()) {
    		$header.addClass('scrolling');
    	}
    	else {
    		$header.removeClass('scrolling');

    	}

    });

	$('.your-class').slick();
	
});