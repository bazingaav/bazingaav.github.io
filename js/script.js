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
    // After Load function body!
}


