$(document).ready(function (){

    const banners=$(".banner");

    // Hide only the first banner
    $("#hideBanner").click(function (){
        banners.first().hide();
    });

    // Show all banners
    $("#showBanners").click(function (){
        banners.show();
    });

    // Slide all banners up
    $("#slideUp").click(function (){
        banners.slideUp();
    });

    // Slide all banners down
    $("#slideDown").click(function (){
        banners.slideDown();
    });

    // Fade out all banners
    $("#fadeOut").click(function (){
        banners.fadeOut();
    });

    // Fade in all banners
    $("#fadeIn").click(function (){
        banners.fadeIn();
    });

    // Automatically rotate banners after every 5 seconds
    let currentBanner=0;

    banners.hide();
    banners.eq(currentBanner).show();

    setInterval(function (){

        banners.eq(currentBanner).fadeOut(500);

        currentBanner=(currentBanner+1)%banners.length;

        banners.eq(currentBanner).fadeIn(500);

    }, 5000);

});