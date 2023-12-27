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

});
