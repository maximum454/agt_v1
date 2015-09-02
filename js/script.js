$(function(){
	$(".bx-main").bxSlider({
		pager:1,
		controls:0
	})

	$(".bx-excursion").bxSlider({
		auto:1,
		controls:0,
		slideWidth: 320,
	    minSlides: 2,
	    maxSlides: 3,
	    slideMargin: 20,
	    moveSlides:1,
	    pager:0
	})
	
	$(".bx-reviews").bxSlider({
		pager:1,
		controls:0
	})
	
	$(".bx-media").bxSlider({
		pager:1,
		controls:0
	})
	$('.popap_box').click(function() {
		$('#modalbox_' + $(this).data('body')).arcticmodal();
	});

	$('.sandwich').click(function(){
		$('.left-menu').animate({
			"margin-left":"0"
		},500);
		$('.wrp').animate({
			"margin-left":"320px",
		},500);
	});

	$('.left-menu_close').click(function(){
		$('.left-menu').animate({
			"margin-left":"-320px"
		},500);
		$('.wrp').animate({
			"margin-left":"0",
		},500);
	});
})