(function ($) {
  'use strict';

  // Preloader js
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });


  //  Search Form Open
  $('#searchOpen').on('click', function () {
    $('.search-wrapper').addClass('open');
  });
  $('#searchClose').on('click', function () {
    $('.search-wrapper').removeClass('open');
  });

  // featured post slider
  $('.featured-post-slider').slick({
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    dots: true
  });

  $('.venobox').venobox();

  verijdelplaats();
  verijdelstelin();
  $( window ).resize(function() {
    verijdelstelin();
  });

})(jQuery);

function verijdelplaats(){

  console.log('verijdelplaats');
  var navwidth = $("#navbar").width();
  var navoffset = $("#navbar").offset().left;
  var pageheight = $(document).height();

  var width = navoffset;

  //  $("body").append('<img id="ij1" src="/images/koffie3.png" style="opacity:0.0;position:absolute;top:0px;left:0;">');
  $("body").append('<img id="ij2" src="/images/koffie2.png" style="opacity:0.0;position:absolute;top:0px;left:0;">');
  $("body").append('<img id="ij3" src="/images/koffie5.png" style="opacity:0.0;position:absolute;top:0px;left:0;">');

  $("body").append('<img id="ij4" src="/images/krabbel1.png" style="opacity:0;position:absolute;top:0px;left:0;">');
  $("body").append('<img id="ij5" src="/images/krabbel2.png" style="opacity:0.0;position:absolute;top:0px;left:0;">');
  $("body").append('<img id="ij6" src="/images/krabbel3.png" style="opacity:0.0;position:absolute;top:0px;left:0;">');
  $("body").append('<img id="ij7" src="/images/krabbel4.png" style="opacity:0.0;position:absolute;top:0px;left:0;">');

}

function verijdelstelin(){
  console.log('verijdelstelin');

  var navwidth = $("#navbar").width();
  var navoffset = $("#navbar").offset().left;
  var pageheight = $(document).height();

  var width = navoffset;

  //  $("#ij1").attr('style', 'margin-bottom:20px;opacity:0.5;width:200px;position:absolute;top:600px;left:'+( navwidth + navoffset - 50 )+'px;z-index:9999;');
  $("#ij2").attr('style', 'margin-bottom:20px;opacity:0.8;width:400px;position:absolute;top:200px;left:'+( navoffset - 280 )+'px;z-index:9999;');
  $("#ij3").attr('style', 'margin-bottom:20px;opacity:0.6;width:200px;position:absolute;top:'+( pageheight - 200) +'px;left:'+( navoffset + 150 )+'px;z-index:9999;');
  $("#ij4").attr('style', 'margin-bottom:20px;opacity:1;width:150px;position:absolute;top:'+( 700) +'px;left:'+( navoffset - 200 )+'px;z-index:9999;');
  $("#ij5").attr('style', 'margin-bottom:20px;opacity:0.7;width:110px;position:absolute;top:300px;left:'+( navwidth + navoffset + 10 )+'px;z-index:9999;');
  $("#ij6").attr('style', 'margin-bottom:20px;opacity:0.7;width:150px;position:absolute;top:'+( 1700) +'px;left:'+( navoffset - 100 )+'px;z-index:9999;');
  $("#ij7").attr('style', 'margin-bottom:20px;opacity:0.7;width:90px;position:absolute;top:'+( pageheight - 600) +'px;left:'+( navwidth + navoffset + 40 )+'px;z-index:9999;');

}


