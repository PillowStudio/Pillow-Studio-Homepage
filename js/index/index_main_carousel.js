// JavaScript Document

$(document).ready(function() {
	
	//	ADD 2018-5-8 SN KINOS
	var $clickFlag	=	true;
	var	$imgCount	=	$('#gallery_carousel_inner_scroll').children().length;
	//	ADD END
	var	$ind		=	1073741823 + $imgCount;
	
	$('#gallery_carousel_inner_scroll').css('width', "calc(" + 100 * $imgCount + "%)");
	var	$carouselW	=	$('#gallery_carousel_inner_scroll').width() / $imgCount;
	$('.gallery_carousel_inner_box').css('width', $carouselW * 0.75);
	$('.gallery_carousel_inner_box').css('padding-left', $carouselW * 0.125);
	$('.gallery_carousel_inner_box').css('padding-right', $carouselW * 0.125);
	$(window).resize(function() {
		$('#gallery_carousel_inner_scroll').css('width', "calc(" + 100 * $imgCount + "%)");
		var	$carouselW	=	$('#gallery_carousel_inner_scroll').width() / $imgCount;
		$('.gallery_carousel_inner_box').css('width', $carouselW * 0.75);
		$('.gallery_carousel_inner_box').css('padding-left', $carouselW * 0.125);
		$('.gallery_carousel_inner_box').css('padding-right', $carouselW * 0.125);
	});
	
	$('#gallery_carousel_L').click(function() {
		if($clickFlag === true) {
			$clickFlag = false;
			$('#gallery_carousel_ind').children().eq($ind % $imgCount).css("background", "#DDD");
			$ind--;
			carousel($ind);
			setTimeout(function(){$clickFlag = true;},700);
		}
	});
	
	$('#gallery_carousel_R').click(function() {
		if($clickFlag === true) {
			$clickFlag = false;
			$('#gallery_carousel_ind').children().eq($ind % $imgCount).css("background", "#DDD");
			$ind++;
			carousel($ind);
			setTimeout(function(){$clickFlag = true;},700);
		}
	});
	
	function carousel(index) {
		$('#gallery_carousel_inner_scroll').css(
			'transform',
			'translateX(calc(-100% / ' + $imgCount + ' * ' + (index % $imgCount) + '))'
		);
		$('#gallery_carousel_ind').children().eq(index % $imgCount).css("background", "#FFF");
	}
	
	
	
	$('#gallery_carousel_ind').children().eq(0).click(function(){
		indList(this.id);
	});
	
	$('#gallery_carousel_ind').children().eq(1).click(function(){
		indList(this.id);
	});
	
	$('#gallery_carousel_ind').children().eq(2).click(function(){
		indList(this.id);
	});
	
	function indList(id) {
		id	=	parseInt(id.substr(id.length-1,1));
		if($clickFlag === true && $ind % 3 !== id) {
			$clickFlag	=	false;
			$('#gallery_carousel_ind').children().eq($ind % $imgCount).css("background", "#DDD");
			$ind		=	1073741823	+	id;
			carousel($ind);
			setTimeout(function(){$clickFlag = true;},700);
		}
	}
	
});

$(document).ready(function(){
	
	var $all = $("#index_main_carousel_container");
	var $first = $all.children().eq(0);
	var $second = $all.children().eq(1);
	var $third = $all.children().eq(2); 
	
	$first.css("display", "block");
	$second.css("display", "none");
	$third.css("display", "none");
	
	$('#slide_icon_L_container').hover(function(){$('#slide_icon_L').fadeIn(0);}, function(){$('#slide_icon_L').fadeOut(0);});
	$('#slide_icon_R_container').hover(function(){$('#slide_icon_R').fadeIn(0);}, function(){$('#slide_icon_R').fadeOut(0);});
	
	function reset_timer() {
		clearTimeout(timer);
		setTimeout(timer, 7000);
	}
	
	var timer = setTimeout(timer, 7000);

	$('#slide_icon_L_container').click(function(){
		
		
		if($first.is(':visible') === true ) {
			$first.fadeOut(0);
			$third.fadeIn(0);
		}
		
		else if($second.is(':visible') === true) {
			$second.fadeOut(0);
			$first.fadeIn(0);
		}
		
		else if($third.is(':visible') === true) {
			$third.fadeOut(0);
			$second.fadeIn(0);
			reset_timer();
		}
	});

	
	$('#slide_icon_R_container').click(function(){
		
		
		if($first.is(':visible') === true ) {
			$first.fadeOut(0);
			$second.fadeIn(0);
		}
		
		else if($second.is(':visible') === true) {
			$second.fadeOut(0);
			$third.fadeIn(0);
		}
		
		else if($third.is(':visible') === true) {
			$third.fadeOut(0);
			$first.fadeIn(0);
			reset_timer();
		}

	});
	
	function timer(){
  		if($first.is(':visible') === true ) {
			$first.fadeOut(0);
			$second.fadeIn(0);
		}
		
		else if($second.is(':visible') === true) {
			$second.fadeOut(0);
			$third.fadeIn(0);
		}
		
		else if($third.is(':visible') === true) {
			$third.fadeOut(0);
			$first.fadeIn(0);
		}
			setTimeout(timer, 7000);
	}
});