/**
 * 
 */

/**
 * 
 */


$(document).ready(function(){
	$('#id').focus();
	
	$('input[name=yesno]').change(function(){
		if($('input[name=yesno]:checked').val() ==1){
			$('#userCheckBox').css('display', 'block');
		} else {
			$('#userCheckBox').css('display', 'none');
		}
	});
	

	
	$('#hp2').on('keyup', function() {
	    if($(this).val().length == 4) {
	       $('#hp3').focus()
	    }
	});

	$('#joinForm').submit(function(){
		var $name = $('#name');
		var $id = $('#id');
		var $pwd = $('#pwd');
		var $passwordCheck = $('#passwordCheck');
		var $email1 = $('#email1');
		
		if($name.val() == ""){
			alert("성명을 입력해주세요");
			$name.focus();
			return false;
		}
		
		if($id.val() == ""){
			alert("ID를 입력해주세요");
			$id.focus();
			return false;
		}
		
		if($pwd.val() == ""){
			alert("비밀번호를 입력해주세요");
			$pwd.focus();
			return false;
		}
		
		if($passwordCheck.val() ==''){
			alert("비밀번호 확인을 입력해주세요");
			$passwordCheck.focus();
			return false;
		}
		
		if($email1.val() == ''){
			alert("이메일을 입력해주세요");
			$email1.focus();
			return false;
		}
		
		if($id.val().length < 6 || $id.val().length > 10){
			alert("ID는 6~10문자로 입력해주세요");
			$id.focus();
			return false;
		}
		
		if(!($pwd.val() == $passwordCheck.val())){
			alert("비밀번호가 일치하지 않습니다");
			$pwd.focus();
			return false;
		}
		
	})
})