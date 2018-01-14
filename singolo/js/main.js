$(function(){

$(".carousel").owlCarousel({
	singleItem:true,
	navigation:true,
	navigationText:false,
	pagination:false,

});
       $('.btn_menu').click(function(){
         $('.menu ul').slideToggle();
       });
      var mixer = mixitup('.mymix');
});