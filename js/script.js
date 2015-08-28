$(function(){
	$(".bx-main").bxSlider({

	})

	$(".bx-excursion").bxSlider({
		slideWidth: 320,
	    minSlides: 2,
	    maxSlides: 3,
	    slideMargin: 20,
	    pager:0
	})
	
	$(".bx-reviews").bxSlider({
		pager:1,
		controls:0
	})
	$('.popap_box').click(function() {
		$('#modalbox_' + $(this).data('body')).arcticmodal();
	});
})