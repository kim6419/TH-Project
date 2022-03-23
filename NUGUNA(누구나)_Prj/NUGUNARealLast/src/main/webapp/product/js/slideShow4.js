/**
 * slideShow2.js
 */

$(function(){
	
	var movedIndex4 = 0;
	
	/*2*/
	function moveSlide(index4){
		movedIndex4 = index4;
		
		//슬라이드 이동
		
		var moveLeft = -(index4 * 215); // 왼쪽으로 이동 거리
		$('.item4').animate({'left':moveLeft}, 'slow');
		
	}
		// prev 버튼 클릭하면 앞(왼쪽)으로 이동
	$('#fPrevBtn4').on('click', function(){
		
		if(movedIndex4 != 0)
			movedIndex4 = movedIndex4 - 1;
		
		moveSlide(movedIndex4); 
	});
	
	
	// next 버튼 클릭하면 뒤(오른쪽)으로 이동
	$('#fNextBtn4').on('click', function(){		
		if(movedIndex4 != 4)
			movedIndex4 = movedIndex4 + 1;
		
		moveSlide(movedIndex4); 
	});
	

})