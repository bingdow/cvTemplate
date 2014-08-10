"use strict";
$(document).ready(function(){
	$("#canvas-button").click(function() {
		$("#navigator, .container").toggleClass('expand');
		return false;
	});
	$('ul#navigator li a').click(function() {
		$('body, html').stop();
		$('body, html').animate({ scrollTop: ($($(this).attr("href")).offset().top -70) }, "slow");
		return false;
	});
});