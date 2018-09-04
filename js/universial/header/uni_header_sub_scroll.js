// JavaScript Document

$(window).scroll(function(){
 	var target_scroll_rate = 50;
	var target_id = "#uni_header_sub_background";
	var scroll_height = $(window).scrollTop();
	if(scroll_height >= target_scroll_rate) {
		$(target_id).css({ 
			top: '0px',
			background: 'rgba(255,255,255,0.9)',
		});
		$('#uni_header_background').css({
			top: '-50px',
			background: 'transparent'
		});
		$('.uni_header_sub_nav_colors').css({
			color: '#000'
		});
	} else {
		$(target_id).css({ 
			top: '50px',
			background: 'transparent',
		});
		$('#uni_header_background').css({ 
			top: '0px',
			background: '#273869'
		});
		$('.uni_header_sub_nav_colors').css({
			color: '#fff'
		});
	}
}).trigger('scroll');