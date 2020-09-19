/*global $,document,window,Swiper*/

$(document).ready(function () {
	"use strict";
	var x = $('header').height(),
		y = $('nav').height();
	$(window).scroll(function () {
		if ($(this).scrollTop() > x) {
			$('nav').addClass('fixed-top');
			$('nav').css({
				'box-shadow': '0px 8px 15px -10px rgba(0,0,0,0.53)'
			});
			$('.Special-area').css({
				'margin-top': y
			});
		} else {
			$('nav').removeClass('fixed-top');
			$('.Special-area').css({
				'margin-top': '0px'
			});
		}
	});
});

var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	init: true,
	direction: 'horizontal',
	initialSlide: 0,
	speed: 300,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});