$(function(){
	var $window = $(window).height();
	$("#summit_registration_article_main_container_1").css("height", $window);
	
	$(window).resize(function(){
		var $window = $(window).height();
		$("#summit_registration_article_main_container_1").css("height", $window);
	});
});