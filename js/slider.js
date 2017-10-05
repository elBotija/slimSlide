function slimSliderOpenSlider(idSlider){
	$("#"+idSlider).show();
	$("body").addClass("noScroll");
	/*Quitamos propiedad de popup para mobile*/
	if ($("body").width() < 700) {
		$(".entry-gallery.facke").hide();
		$("#"+idSlider).removeClass("popup popup-gallery darkSkin");
	};
}
function slimSliderCloseSlider(idSlider){
	$("#"+idSlider).hide();
	$("body").removeClass("noScroll");
}
function slimSliderNextPrevSlide(elem, direction){
	console.log("click");
	console.log(elem);
	console.log(direction);
	var cantSlides = $(elem).parent().find(".slide").length;
	console.log(cantSlides);
	var sPos = Number($(elem).parent().find(".swiper-wrapper").css("--data-x"));
	console.log(sPos);
	if(direction == "next" && sPos < (cantSlides - 1)){
		$(elem).parent().find(".swiper-wrapper").css("--data-x", " "+(sPos + 1));
	}else if(direction == "prev" && sPos > 0){
		$(elem).parent().find(".swiper-wrapper").css("--data-x", " "+(sPos - 1));
	}
}