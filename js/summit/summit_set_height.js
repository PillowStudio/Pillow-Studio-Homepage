$(function(){
	var $window = $(window).height();
	$("#summit_article_main_container").css("height", $window);
	
	$(window).resize(function(){
		var $window = $(window).height();
		$("#summit_article_main_container").css("height", $window);
	});
});