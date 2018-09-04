// JavaScript Document

$(window).scroll(function(){
 	var target_scroll_rate = 50;
	var target_id = "#uni_header_background";
	var scroll_height = $(window).scrollTop();
	if(scroll_height >= target_scroll_rate) {
		$(target_id).css({ background: 'rgba(39,56,105,0.98)' });
	} else {
		$(target_id).css({ background: '' });
	}
}).trigger('scroll');