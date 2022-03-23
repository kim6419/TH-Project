/**
 * slideShow2.js
 */

$(function(){
	
	var movedIndex2 = 0;
	
	/*2*/
	function moveSlide(index2){
		movedIndex2 = index2;
		
		//슬라이드 이동
		
		var moveLeft = -(index2 * 215); // 왼쪽으로 이동 거리
		$('.item2').animate({'left':moveLeft}, 'slow');
		
	}
		// prev 버튼 클릭하면 앞(왼쪽)으로 이동
	$('#fPrevBtn2').on('click', function(){
		
		if(movedIndex2 != 0)
			movedIndex2 = movedIndex2 - 1;
		
		moveSlide(movedIndex2); 
	});
	
	
	// next 버튼 클릭하면 뒤(오른쪽)으로 이동
	$('#fNextBtn2').on('click', function(){		
		if(movedIndex2 != 4)
			movedIndex2 = movedIndex2 + 1;
		
		moveSlide(movedIndex2); 
	});
	

})