/**
 * 
 */

var idCheck='abcd'
var pwdCheck = '1234'

$(function(){
	$('#loginBtn').on('click', function(){
		if( $('#name2').val() == '' ) {
			alert('아이디를 입력해주세요.');
			$('#name2').focus();
			return false;
		}
		
		if($('#pwd').val() == ''){
			alert("비밀번호를 입력해주세요");
			$('#pwd').focus();
			return false;
		}
		
		if(!($('#name2').val() == idCheck &&  $('#pwd').val() == 1234)){
			alert("로그인에 실패하였습니다");
			 $('#name2').focus();
			return false;
		}
		
	})
	
})