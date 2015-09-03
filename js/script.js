$(window).scroll(function(){
	var r=$(document).scrollTop();
		e=50;
	if(r>e){
		//$("#menu2").addClass("locked");
		$(".main-nav").addClass("locked");
	}
	else{
		$(".main-nav").removeClass("locked");
		$(".main-nav").removeAttr("style");
		//$("#menu2").removeClass("locked");
	};
});

$(function(){
	$(".bx-main").bxSlider({
		pager:1,
		controls:0
	})

	$(".bx-tour").bxSlider({
		pager:0,
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

		$('.locked').animate({
			"margin-left":"-25%",
			"left":"50%",
		},500)
		return false;
	});
	
	$(document).keydown(function(e) {
    if( e.keyCode === 27 ) {
        $('.left-menu').animate({
			"margin-left":"-320px"
		},500);
		$('.wrp').animate({
			"margin-left":"0",
		},500);
		$('.locked').animate({
			"margin-left":"0",
			"left":"0",
		},500)
        return false;
	    }
	});

		
	$('.left-menu_close').click(function(){


		$('.left-menu').animate({
			"margin-left":"-320px"
		},500);
		$('.wrp').animate({
			"margin-left":"0",
		},500);
		$('.locked').animate({
			"margin-left":"0",
			"left":"0",
		},500)
		return false;
	});
})