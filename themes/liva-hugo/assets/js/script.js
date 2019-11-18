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

  // venobox initialize
  $('.venobox').venobox();

  var navwidth = $("#navbar").width();
  var navoffset = $("#navbar").offset().left;
  var pageheight = $(document).height();

  var width = navoffset;
  console.log(width);

  //links of rechts
  //links: navoffset - 250
  //rechts: navoffet + navwidth - 250


  $("body").append('<img src="/images/koffie3.png" style="opacity:0.5;width:200px;position:absolute;top:600px;left:'+( navwidth + navoffset - 50 )+'px;z-index:9999;">');
  $("body").append('<img src="/images/koffie2.png" style="opacity:0.8;width:400px;position:absolute;top:200px;left:'+( navoffset - 280 )+'px;z-index:9999;">');
  $("body").append('<img src="/images/koffie5.png" style="opacity:0.6;width:200px;position:absolute;top:'+( pageheight - 200) +'px;left:'+( navoffset + 150 )+'px;z-index:9999;">');

  $("body").append('<img src="/images/krabbel1.png" style="opacity:1;width:150px;position:absolute;top:'+( 700) +'px;left:'+( navoffset - 200 )+'px;z-index:9999;">');
  $("body").append('<img src="/images/krabbel2.png" style="opacity:0.7;width:110px;position:absolute;top:300px;left:'+( navwidth + navoffset + 10 )+'px;z-index:9999;">');
  $("body").append('<img src="/images/krabbel3.png" style="opacity:0.7;width:150px;position:absolute;top:'+( 1700) +'px;left:'+( navoffset - 100 )+'px;z-index:9999;">');
  $("body").append('<img src="/images/krabbel4.png" style="opacity:0.7;width:90px;position:absolute;top:'+( pageheight - 600) +'px;left:'+( navwidth + navoffset + 40 )+'px;z-index:9999;">');



})(jQuery);
