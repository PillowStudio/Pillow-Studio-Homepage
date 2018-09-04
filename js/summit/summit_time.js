// JavaScript Document

$(function() {
	setInterval(function(){
		var dt	=	new Date('5/19/2018').getTime();
		var	de	=	new Date().getTime();
		var sec	=	parseInt((dt - de) / 1000);
		$('#main_time_day').html(parseInt(sec / 86400));
		sec		%=	86400;
		$('#main_time_hour').html(parseInt(sec / 3600));
		sec		%=	3600;
		$('#main_time_min').html(parseInt(sec / 60));
		sec		%=	60;
		$('#main_time_sec').html(parseInt(sec));
	}, 1000);
});