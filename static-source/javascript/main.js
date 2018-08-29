'use strict';

$(document).ready(function() {

	var nav = $(".site-nav");
	var	navScrolled = "site-nav-scrolled";
	var	hdr = $('header').height();

	$(window).scroll(function() {
		if( $(this).scrollTop() > hdr ) {
			nav.addClass(navScrolled);
		} else {
			nav.removeClass(navScrolled);
		}
	});

	$(".side-nav-trigger").click(function(e) {
			e.preventDefault();
			$(".wrapper").toggleClass("toggled");
	});

	$("a.dropdown").click(function(e){
		e.preventDefault();
		$(this).toggleClass("open");
	});

	//AUTOSCROLL
	var scrollLink = $('.scroll');
	var locationHome = false;	
	if(window.location.href === '/'){
		locationHome = true;
	}

	scrollLink.click(function(e) {	
		if(locationHome){
			e.preventDefault();
		}
		console.log('scroll');
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top - 50
		}, 500 )
	})

});

