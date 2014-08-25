$( document ).ready(function() {

    // Scroll to 
    $(".about").click(function(event) {
    event.preventDefault();
    $("body").animate({scrollTop: $("#who-bruce").offset().top-75}, 'slow');
    });

    // product hover
    $('.product-item').hover(function() {
      $(this).find('.product-name').fadeIn('fast');
    }, function() {
      $(this).find('.product-name').fadeOut('fast');
    });

    // menu hover
    var video1 = document.getElementById('bg-video');
    var video2 = document.getElementById('amps-video');
    $('#local_band').hover(function() {
      video1.classList.add('hide');
      video2.classList.remove('hide');
      video2.play();
    }, function() {
      video2.classList.add('hide');
      video1.classList.remove('hide');
      video1.play();
    });
     video1 = document.getElementById('bg-video');
    var video2 = document.getElementById('amps-video');
    $('#local_guitarist').hover(function() {
      video1.classList.add('hide');
      video2.classList.remove('hide');
      video2.play();
    }, function() {
      video2.classList.add('hide');
      video1.classList.remove('hide');
      video1.play();
    });
     video1 = document.getElementById('bg-video');
    var video2 = document.getElementById('amps-video');
    $('#local_artist').hover(function() {
      video1.classList.add('hide');
      video2.classList.remove('hide');
      video2.play();
    }, function() {
      video2.classList.add('hide');
      video1.classList.remove('hide');
      video1.play();
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