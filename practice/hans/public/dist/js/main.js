$(document).ready(function(){
/*  TOP 버튼 */
 var btn_top = $('.btn_top').find('button');
 btn_top.on('click', function(e){
   e.preventDefault();
   $('html, body').animate({'scrollTop':0},400);
 });
// TOP버튼 끝
/* 슬라이드 배너 */
(function(){

 var slide_ul = $('.slide_box').children('ul');
 var slide_li = slide_ul.children('li');
 var btn_ul = $('.btn_box').children('ul');
 var btn_li = btn_ul.children('li');
 var tab_ul = $('.tab_box').children('ul');
 var tab_li = tab_ul.children('li');
 var i =0;
 btn_li.on('click',function(e){
   e.preventDefault();
   var _this = $(this);
   var i = _this.index();
   slide_ul.animate({'marginLeft': (-100*i)+'%'},500);
   _this.siblings().removeClass('select');
   _this.addClass('select');
   tab_li.eq(i).siblings().removeClass('select');
   tab_li.eq(i).addClass('select');
 });
 function moveR(){
   i-=1;
   if(i<= -3){
      i=0;
   }
   slide_ul.animate({'marginLeft': (100*i)+'%'},500);
   btn_li.eq(-i).siblings().removeClass('select');
   btn_li.eq(-i).addClass('select');
   tab_li.eq(-i).siblings().removeClass('select');
   tab_li.eq(-i).addClass('select');
 }
 setInterval(moveR,3000);
})();
 //슬라이드 배너
 /*info cake*/
 (function(){
     var slice_box = $('.slice_box2').children('ul');
     var btn_lft = $('.btn_lft');
     var btn_rgt = $('.btn_rgt');
     var i = 0;
     function moveR(){
         i -= 1;
         if(i<= -4){
            i=0;
         }
         slice_box.animate({'marginLeft': (i*100) + '%'},500);
     }
      function moveL(){
         i += 1;
         console.log(i);
         if(i> 0){
            i=-3;
         }
         slice_box.animate({'marginLeft': (i*100) + '%'},500);
      }
      btn_rgt.on('click',moveR);
      btn_lft.on('click',moveL);
      setInterval(moveR,3000);
})();

 //info cake
});
