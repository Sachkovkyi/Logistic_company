 $(function() {   
    

    let intro = $("#intro");
    let header = $("#header")


        // Headre-class on scroll

    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
        let headerH = header.innerHeight();

    
        let scrollTop = $(this).scrollTop;

    
        if (scrollTop >= (introH - headerH)) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
         }
    })
 
    $('[data-scroll]').on("click", function(event) {
        event.preventDefault();

        let scrollElement = $(this).data("scroll")
        let scrollElPos = $(scrollElement).offset().top;

        $("html, body").animate({
            scrollTop: scrollElPos - 80
        }, 500)

        console.log(scrollElement)
        console.log(scrollElPos)
    })

    // ScrollSpy



});

$(document).ready(function(){

    var sectionIds = $('a.nav__link');
  
      $(document).scroll(function(){
          sectionIds.each(function(){
  
              var container = $(this).attr('href');
              var containerOffset = $(container).offset().top;
              var containerHeight = $(container).outerHeight();
              var containerBottom = containerOffset + containerHeight;
              var scrollPosition = $(document).scrollTop();
      
              if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                  $(this).addClass('active');
              } else{
                  $(this).removeClass('active');
              }
      
      
          });
      });


    //   Modal

    $('[data-modal]').on('click', function(){
        event.preventDefault();

        let modal = $(this).data('modal')
        console.log(modal);

        $('body').addClass('no-scroll');

        $(modal).addClass('show')
    })

    $('[data-modal-close]').on('click', function() {
        event.preventDefault();

        let modal = $(this).parents('.modal');
        
        $('body').removeClass('no-scroll');
        modal.removeClass('show');

    })

    $('modal').on('click', function(){

        $('body').removeClass('no-scroll');
        $('modal').removeClass('show');

    });

    $('modal__content').on('click', function(){
        event.stopPropagation();

    });


    
     let navToogle = $('#navToogle');
     let nav = $('#nav');

     navToogle.on('click', function(){
            event.preventDefault();

            nav.toogleClass('show');

     });
     
  
  
  });

