$(function(){
	var $window = $(".summit_article").width();
	$(".summit_article_1_universial_container").css("width", $window/3);
	
	$(window).resize(function(){
		var $window = $(".summit_article").width();
		$(".summit_article_1_universial_container").css("width", $window/3);
	});
});