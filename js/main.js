$( document ).ready(function() {

  // Scroll to 
  $(".theman").click(function(event) {
    event.preventDefault();
    $("body").animate({scrollTop: $("#who-bruce").offset().top+75}, 'slow');
  });


    // Back to Resources button
    // $(document).ready(function() {
    //     var offset = 500;
    //     var duration = 500;
    //     $(window).scroll(function() {
    //         if (jQuery(this).scrollTop() > offset) {
    //             jQuery('.back-to-res').fadeIn(duration);
    //         } else {
    //             jQuery('.back-to-res').fadeOut(duration);
    //         }
    //     });
        
    //     $('.back-to-res').click(function(event) {
    //         event.preventDefault();
    //         $('html, body').animate({scrollTop: $('#lp-pom-block-487').offset().top-80}, duration);
    //         return false;
    //     })
    // });


});