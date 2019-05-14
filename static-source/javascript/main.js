'use strict';

// forEach method, could be shipped as part of an Object Literal/Module
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

$(document).ready(function() {

	var nav = $(".site-nav");
	var	navScrolled = "site-nav-scrolled";
	var	hdr = $('header').height();
	var imageThumbs = document.querySelectorAll('.image-thumb');
	var pageOverlay = document.querySelector('.page-overlay');

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
	});

	forEach(imageThumbs, function(i){
		imageThumbs[i].addEventListener('click', function(){
			pageOverlay.classList.add('show');
			pageOverlay.querySelector('img').src = imageThumbs[i].querySelector('img').src;
			pageOverlay.querySelector('img').alt = imageThumbs[i].querySelector('img').alt;
		})
	})

	pageOverlay.addEventListener('click', function(){
		if(pageOverlay.classList.contains('show')){
			pageOverlay.classList.remove('show');
		}
	});

});

