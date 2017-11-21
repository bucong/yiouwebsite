$(function() {
	$('.index .intro .tab div').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.index .intro li').eq($(this).index()).css('display','flex').siblings().css('display','none');
	})
	$('.contact-us li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.contact-us iframe').attr('src','map/map'+$(this).index()+'.html');
	})
})