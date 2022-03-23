/**
 * 
 */


$(document).ready(function() {
	

	
$('.dropBox').hover(function() {
	$(this).find('.dropmenu').show();
}, function() {
	$('.dropmenu').hide();
});

/*탑누르면 상위로이동*/
$('#moveToTop').on('click', function() {
	$('html,body').animate({ scrollTop: 0 }, 500);
});


	

});   // ready 종료