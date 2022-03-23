/**
 * slideShow1.js
 */

$(function(){
   
   var movedIndex = [0, 0, 0, 0];
   
   //슬라이드 패널을 움직이는 함수
   function moveSlide(index, i){
      
      
      movedIndex[i] = index;
      //슬라이드 이동
      var moveLeft = -(index * 215); // 왼쪽으로 이동 거리
      
      switch(i){
         case 0:
            $('.item').animate({'left':moveLeft}, 'slow');
            break;
         case 1:
            $('.item2').animate({'left':moveLeft}, 'slow');
            break;
         case 2:
            $('.item3').animate({'left':moveLeft}, 'slow');
            break;
         case 3:
            $('.item4').animate({'left':moveLeft}, 'slow');
            break;
         
      }
      
   }
   $('.prevBtn').each(function(index){
      
      $(this).on('click', function(){
         if(movedIndex[index] >= 0)
            movedIndex[index] = movedIndex[index] - 1;
         else movedIndex[index] = 0;
         
         moveSlide(movedIndex[index], index); 
      });
      
      
   });
   
   $('.nextBtn').each(function(index){
      $(this).on('click', function(){
         if(movedIndex[index] <= 4)
            movedIndex[index] = movedIndex[index] + 1;
         else movedIndex[index] = 0;
         
         moveSlide(movedIndex[index], index); 
      });
   });
   
   
   $('.slideIcon').each(function(index){
      $(this).hover(
         function() {
            $(this).attr('src', 'image/pink.png');
         },
         function() {
            $(this).attr('src', 'image/pink.png');
         }
      );
      
      //
      $(this).on('click', function(){
         var area = index%6;
         var i = parseInt(index/6);
         moveSlide(area, i);
      });
      
   });/*each 끝*/



})