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

		// forEach method, could be shipped as part of an Object Literal/Module
		var forEach = function (array, callback, scope) {
			for (var i = 0; i < array.length; i++) {
				callback.call(scope, i, array[i]); // passes back stuff we need
			}
		};
	
		var imageThumbs = document.querySelectorAll('.image-thumb');
		var pageOverlay = document.querySelector('.page-overlay');
		var imgSrc;
	
		forEach(imageThumbs, function(i){
			imageThumbs[i].addEventListener('click', function(){
				imgSrc = imageThumbs[i].querySelector('img').src;
				pageOverlay.classList.add('show');
				pageOverlay.querySelector('img').src = imgSrc.replace("?nf_resize=smartcrop&w=337&h=227", "");
				pageOverlay.querySelector('img').alt = imageThumbs[i].querySelector('img').alt;
			})
		})
	
		if(pageOverlay) {
			pageOverlay.addEventListener('click', function(){
				if(pageOverlay.classList.contains('show')){
					pageOverlay.classList.remove('show');
				}
			});
		}
		
});

