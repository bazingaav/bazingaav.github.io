$(document).ready(preloderFunction());   
function preloderFunction() {
  
    setTimeout(function() {            
        document.getElementById("page-top").scrollIntoView({behavior: 'smooth'});
        $('#ctn-preloader').addClass('loaded');  
        $('body').removeClass('no-scroll-y');

        if ($('#ctn-preloader').hasClass('loaded')) {
            $('#preloader').delay(1000).queue(function() {
                $(this).remove();
                // If you want to do something after removing preloader:
                afterLoad();
            });
        }
    }, 3000);
}

function afterLoad() {   
}

$(function () {
    "use strict";
    $(window).scroll(function() {
      var bannerHeight = $(".name-page").height(); 
      var scroll = $(window).scrollTop();
      if (scroll >= bannerHeight) {
          $(".sidebar").addClass("fixed");
          $(".sidebar").removeClass("hidden");
      } else {
          $(".sidebar").removeClass("fixed");
      }
    });
  });


$(function () { 
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    console.log(screenWidth)
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});
