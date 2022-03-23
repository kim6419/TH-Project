/**
 * slideShow2.js
 */

$(function(){
	
	var movedIndex3 = 0;
	
	/*2*/
	function moveSlide(index3){
		movedIndex3 = index3;
		
		//슬라이드 이동
		
		var moveLeft = -(index3 * 215); // 왼쪽으로 이동 거리
		$('.item3').animate({'left':moveLeft}, 'slow');
		
	}
		// prev 버튼 클릭하면 앞(왼쪽)으로 이동
	$('#fPrevBtn3').on('click', function(){
		
		if(movedIndex3 != 0)
			movedIndex3 = movedIndex3 - 1;
		
		moveSlide(movedIndex3); 
	});
	
	
	// next 버튼 클릭하면 뒤(오른쪽)으로 이동
	$('#fNextBtn3').on('click', function(){		
		if(movedIndex3 != 4)
			movedIndex3 = movedIndex3 + 1;
		
		moveSlide(movedIndex3); 
	});
	

})