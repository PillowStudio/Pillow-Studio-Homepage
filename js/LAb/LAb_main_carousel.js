// JavaScript Document

$(document).ready(function() {
	//	ADD 2018-5-8 SN KINOS
	//  MODIFY 2018-7-8 STEVEN AHN
	//  MODIFY 2018-9-9 STEVEN AHN
	var $clickFlag	=	true;
	var	$imgCount	=	$('#LAb_article_main_container').children().length;
	//	ADD END
	var	$ind		=	1073741823 + $imgCount + Math.floor(Math.random() * $imgCount + 1);
	function carousel(index) {
		$('#LAb_article_main_container').css(
			'transform',
			'translateX(calc(-100% / ' + $imgCount + ' * ' + (index % $imgCount) + '))'
		);
	}
	carousel($ind);
	
	$('#LAb_article_main_container').css('width', "calc(" + 100 * $imgCount + "vw)");

	$(window).resize(function() {
		$('#LAb_article_main_container').css('width', "calc(" + 100 * $imgCount + "vw)");
	});
	
	$('#LAb_article_main_controller_L').click(function() {
		if($clickFlag === true) {
			$clickFlag = false;
			$ind--;
			carousel($ind);
			setTimeout(function(){$clickFlag = true;},700);
		}
	});
	
	$('#LAb_article_main_controller_R').click(function() {
		if($clickFlag === true) {
			$clickFlag = false;
			$ind++;
			carousel($ind);
			setTimeout(function(){$clickFlag = true;},700);
		}
	});
	
	setTimeout(function() {
		$('#LAb_article_main_container').css('-webkit-transition', 'transform .7s ease');
		$('#LAb_article_main_container').css('-moz-transition', 'transform .7s ease');
		$('#LAb_article_main_container').css('-ms-transition', 'transform .7s ease');
		$('#LAb_article_main_container').css('-o-transition', 'transform .7s ease');
		$('#LAb_article_main_container').css('transition', 'transform .7s ease');	
	}, 10);
});

$(document).ready(function(){
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