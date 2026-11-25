// First jQuery version handles carousel and active widgets
jqFirst(document).ready(function (){

    let currentSlide=0;
    const slides=jqFirst(".slide");

    // Display one slide at a time
    function showSlide(index){
        slides.hide();
        slides.eq(index).show();
    }

    // Move to next slide
    jqFirst("#next").click(function (){
        currentSlide=(currentSlide+1)%slides.length;
        showSlide(currentSlide);
    });

    // Move to previous slide
    jqFirst("#previous").click(function (){
        currentSlide=(currentSlide-1+slides.length)%slides.length;
        showSlide(currentSlide);
    });

    // Rotate carousel automatically
    setInterval(function (){
        currentSlide=(currentSlide+1)%slides.length;
        showSlide(currentSlide);
    }, 3000);

    // Highlight the widget that is clicked
    jqFirst(".widget").click(function (){
        jqFirst(".widget").css("background-color","white");
        jqFirst(this).css("background-color","lightyellow");
    });

});

// Second jQuery version handles modal and tooltips
jqSecond(document).ready(function (){

    // Open notification modal
    jqSecond("#notificationButton").click(function (){
        jqSecond("#modal").show();
    });

    // Close notification modal
    jqSecond("#closeModal").click(function (){
        jqSecond("#modal").hide();
    });

    // Display tooltip when mouse enters a widget
    jqSecond(".widget").hover(
        function (){
            const message=jqSecond(this).attr("title");
            jqSecond(this).attr("data-tooltip",message);
        },
        function (){
            jqSecond(this).removeAttr("data-tooltip");
        }
    );

});