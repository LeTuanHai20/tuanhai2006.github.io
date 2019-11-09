 $(function(){
 vitricuaedu=$('#khoiedu').offset().top;
 $(".xuong").click(function() {
 	$('body,html').animate({scrollTop:vitricuaedu-100},300)
 });
  $("#kn").click(function() {
 	$('body,html').animate({scrollTop:vitricuaedu-100},300)
 });
  vitricuacmt=$('#cmt').offset().top;
  $("#cm").click(function() {
 	$('body,html').animate({scrollTop:vitricuacmt-500},300)
 });
})  
 