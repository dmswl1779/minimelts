$(document).ready(function(){
	$(".panel").click(function(){
		$(".panelMenu").css("width","70%")
	})
	$("#container").click(function(){
		$(".panelMenu").css("width","0")
	})
})
$(document).ready(function(){
	$(".on").click(function(e){
		e.preventDefault();
		$(".panelMenuSub",this).toggle(300)
	})
})
$(document).ready(function(){
	$(".mainSlider").slick({
		infinite:true,
		arrows:false,
		slidesToShow:1,
		slidesToScroll:1,
		autoplay:true,
		autoplaySpeed:3000,
		dots:true,
	});
})

$(document).ready(function(){
	$('.one-time').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  arrows:false,
		
	});
})