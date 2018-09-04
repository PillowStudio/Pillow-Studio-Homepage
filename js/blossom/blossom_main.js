// JavaScript Document
setTimeout(function(){
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
},200);
if (!((/*@cc_on!@*/false || !!document.documentMode) || !!window.StyleMedia)) {
	document.addEventListener("DOMContentLoaded", function(){
		document.addEventListener('scroll', changer);

		var	main	=	document.getElementById('blossom_img_front');
		var	sub		=	document.getElementById('blossom_img_back');
		//var	mainChd	=	main.firstElementChild.children;
		var	first	=	document.getElementById('blossom_article_1_container');
		var	second	=	document.getElementById('blossom_article_2_container');

		function imgUrl(argument) {
		//	return	'url(image/blossom/'	+	argument	+	')';
			return	'image/blossom/'	+	argument;
		}

		function changer() {
			if (window.pageYOffset < first.offsetTop - window.innerHeight) {
				console.log('1');
				main.src	=	imgUrl('iMacPro1-0.png');
				sub.src		=	imgUrl('iMacPro1-1.png');
			}
			else if (first.offsetTop - window.innerHeight < window.pageYOffset && window.pageYOffset < first.offsetTop) {
				console.log('2');
				document.getElementById('blossom_article_img_container').style.position	=	'';
				document.getElementById('blossom_article_img_container').style.top		=	'';
				main.src	=	imgUrl('iMacPro1-0.png');
				sub.src		=	imgUrl('iMacPro1-1.png');
				main.setAttribute('style',
							'-webkit-clip-path: inset(0 0 calc('	+	(window.pageYOffset - window.innerHeight * 2) + 'px));'	+
							' clip-path: inset(0 0 calc('	+	(window.pageYOffset - window.innerHeight * 2) + 'px));'
				);
			}
			else if (first.offsetTop < window.pageYOffset && window.pageYOffset < first.offsetTop + window.innerHeight) {
				console.log('3');
				document.getElementById('blossom_article_img_container').style.top		=	first.offsetTop - window.pageYOffset + 'px';
				main.style			=	'';
				main.style.bottom	=	'-100vh';
				sub.style.bottom	=	'0';
				sub.style.top		=	window.pageYOffset * 3;
				main.src			=	imgUrl('copyright0.svg');
				sub.src				=	imgUrl('iMacPro1-1.png');
			}
			else if (first.offsetTop + window.innerHeight < window.pageYOffset && window.pageYOffset < first.offsetTop + 2*window.innerHeight) {
				console.log('4');
				document.getElementById('blossom_article_img_container').style.top		=	'-100vh';
				main.setAttribute('style',
							'-webkit-clip-path: inset(0 0 calc('	+	(window.pageYOffset - window.innerHeight * 4) + 'px));'	+
							' clip-path: inset(0 0 calc('	+	(window.pageYOffset - window.innerHeight * 4) + 'px));'
				);
				main.style.bottom	=	'-100vh';
				sub.style.bottom	=	'-100vh';
				sub.src		=	imgUrl('copyright1.svg');
			}
			else {
				console.log('5');
				main.style.bottom	=	'';
				sub.style.bottom	=	'';
				document.getElementById('blossom_article_img_container').style.top		=	second.offsetTop - window.pageYOffset + 'px';
			}
		}
	});
}
else {
	document.addEventListener("DOMContentLoaded", function(){
		var	main	=	document.getElementById('blossom_img_front');
		var	sub		=	document.getElementById('blossom_img_back');
		function imgUrl(argument) {
			return	'image/blossom/'	+	argument;
		}
		main.src	=	imgUrl('iMacPro1-1.png');
		sub.src		=	imgUrl('iMacPro1-2.png');
	});
}