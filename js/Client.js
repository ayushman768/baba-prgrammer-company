$(document).ready(function(){
	$('.menu-icon').click(function(){
		  $('.nav-menu>ul').slideToggle(500);
			
	});
	

			$('.customer-logos').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed:1200,
				arrows: false,
				dots: false,
					pauseOnHover: true,
					responsive: [{
					breakpoint: 768,	
					settings: {
						slidesToShow: 2
					}
				}, {
					breakpoint: 520,
					settings: {
						slidesToShow: 1
					}
				}]
			});
		});