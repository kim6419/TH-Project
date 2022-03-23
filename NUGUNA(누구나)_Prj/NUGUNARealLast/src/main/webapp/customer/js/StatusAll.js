/**
 * 
 */


var AllStatusInfo = {
	title : ['뉴 욕쟁이 디저트', 'Alohaiz', 'Wadiz'],
	responsible : ['홍길동 ( 010-1111-1111 )', '김은수 ( 010-2222-2222)', '이하늘 ( 010-3333-3333 )'],
	date : ['2021.11.11', '2021.02.22', '2000.11.11'],
	renenues : ['1,200,000▲', '123,000▲', '-12,000▼']
	
}	
$(document).ready(function(){
		
	var current = 0;
	
	$('#StatusList a').on('click', function(){
		if($(this).text().includes('뉴 욕쟁이')){
			current = 0;
		} else if($(this).text()=='Alohaiz'){
			current = 1;
		} else if($(this).text()=='Wadiz'){
			current = 2;
		}
		
		
		// 선택한 투자 이름의 정보 가져오기
		
		$('#fadeImg').attr('src', 'image/invest'+ (current+1) +'.jpg');
		$('#title').text(AllStatusInfo.title[current]);
		$('#responsible').text(AllStatusInfo.responsible[current]);
		$('#date').text(AllStatusInfo.date[current]);
		$('#renenues').text(AllStatusInfo.renenues[current]);
		
		
		
	});
	
	

})



