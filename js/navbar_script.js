      $( document ).ready(function() {
      	
      	window.onload = function () {
      		setTimeout (function () {
  				    $(window).scrollTop(0); 
 			      }, 10); //100ms for example
      	}

        $('.allproducts').click(function(e){
          var menu = $('.navmenu');
          $('body').toggleClass('nav-active');
          e.preventDefault();
        });

        $('#dialog').plainModal({overlay: {fillColor: '#3d0808', opacity: 0.7}});

        $('.cta-dark').click(function(e) {
        	$("#dialog").plainModal('open');
        });

        handlerIn = function() {
          $('.close-button').fadeTo('fast', 0.7);
        }

        handlerOut = function() {
          $('.close-button').fadeTo('fast', 0);
        }

        $('#dialog').hover(handlerIn, handlerOut);

        $('.close-button').click(function() {
          $('#dialog').plainModal('close');
        });
 });