$(document).ready(function(){
	$('.first').show().addClass('animated fadeInUp'); //banner first

	setTimeout(function(){
		$('.second').show().addClass('animated fadeInUp'); //banner second
	}, 500);

	setTimeout(function(){
		$('.third, .fourth').show().addClass('animated fadeInUp'); //bannder third/fourth
	}, 1000);

	$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

	});// scrollTo

	$(window).scroll(function() {

		$('#project1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$('.projectbox').show().addClass("animated fadeInDown");
			}
		});
	}); //onScroll appear

}); //end ready