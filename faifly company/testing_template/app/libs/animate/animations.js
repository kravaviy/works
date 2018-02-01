
$(document).scroll(function(){
              $('.logobiganimate').toggleClass('init animated fadeInLeft', $(this).scrollTop() > 250);
              $('.exp-1').toggleClass('init animated fadeInLeft', $(this).scrollTop() > 1350);
              $('.exp-2').toggleClass('init animated fadeInDown', $(this).scrollTop() > 1350);
              $('.exp-3').toggleClass('init animated fadeInRight', $(this).scrollTop() > 1350);
              $('.exp-4').toggleClass('init animated fadeInLeft', $(this).scrollTop() > 1500);
              $('.exp-5').toggleClass('init animated fadeInUp', $(this).scrollTop() > 1500);
              $('.exp-6').toggleClass('init animated fadeInRight', $(this).scrollTop() > 1500);
  
              $('.th-1').toggleClass('init animated bounceInLeft', $(this).scrollTop() > 2200);
              $('.td-1').toggleClass('init animated fadeInUpBig', $(this).scrollTop() > 2200);
              $('.tp-1').toggleClass('init animated flipInX', $(this).scrollTop() > 2200);       
              $('.th-2').toggleClass('init animated bounceInLeft', $(this).scrollTop() > 2200);
              $('.td-2').toggleClass('init animated fadeInUpBig', $(this).scrollTop() > 2200);
              $('.tp-2').toggleClass('init animated flipInX', $(this).scrollTop() > 2200);
              $('.th-3').toggleClass('init animated bounceInRight', $(this).scrollTop() > 2200);
              $('.td-3').toggleClass('init animated fadeInUpBig', $(this).scrollTop() > 2200);
              $('.tp-3').toggleClass('init animated flipInX', $(this).scrollTop() > 2200);
              $('.th-4').toggleClass('init animated bounceInRight', $(this).scrollTop() > 2200);
              $('.td-4').toggleClass('init animated fadeInUpBig', $(this).scrollTop() > 2200);
              $('.tp-4').toggleClass('init animated flipInX', $(this).scrollTop() > 2200);
              
              $('.gal-1').toggleClass('init animated zoomInRight', $(this).scrollTop() > 3100);
              $('.gal-2').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3400);
              $('.gal-3').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3500);
              $('.gal-4').toggleClass('init animated zoomInRight', $(this).scrollTop() > 3100);
              $('.gal-5').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3400);
              $('.gal-6').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3500);
              $('.gal-7').toggleClass('init animated zoomInRight', $(this).scrollTop() > 3100);
              $('.gal-8').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3400);
              $('.gal-9').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3500);
              $('.gal-10').toggleClass('init animated zoomInRight', $(this).scrollTop() > 3100);
              $('.gal-11').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3400);
              $('.gal-12').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3500);
 	});