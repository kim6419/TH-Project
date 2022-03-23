/**
 * 
 */

$(document).ready(function() {
	

	/* 슬라이드,버튼누르면 사진이동------------------------------------------- */
	$('.prev').on('click',function(){
		$('.slideImage').attr('src', "image/김밥천국.jpg");
	});
	
	$('.next').on('click',function(){
		$('.slideImage').attr('src', "image/메가커피.jpg");
	});
	
	$('.control1').on('click',function(){
		$('.slideImage').attr('src', "image/김밥천국.jpg");
	});
	$('.control2').on('click',function(){
		$('.slideImage').attr('src', "image/스타벅스.jpg");
	});
	$('.control3').on('click',function(){
		$('.slideImage').attr('src', "image/메가커피.jpg");
	});
	
	/* --------------------------------------------------------------------------*/
	

	

});   // ready 종료