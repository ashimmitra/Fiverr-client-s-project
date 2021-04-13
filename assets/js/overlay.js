$('#toggle').click(function(){
	$(this).toggleClass('toggle-active');
	$('#overlay').toggleClass('nav-active');
});
$('#overlay ul li a').click(function(){
	$('#overlay').toggleClass('nav-active');
	$('#toggle').removeClass('toggle-active');
});

$(document).ready(function(){
	$('.scrolltop a i').hide();
	$('.scrolltop a i').click(function(){
		$('html').animate({scrollTop: 0}, 5000);
	});
});

$(window).scroll(function(){
	var top = $(window).scrollTop();
	if(top > 5000){
		$('.scrolltop a i').fadeIn(500);
	}else{
		$('.scrolltop a i').fadeOut(500);
	}
});	