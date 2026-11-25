$(document).ready(function (){

    // Show or hide the answer when a question is clicked
    $(".question").click(function (){
        $(this).next(".answer").toggle();
    });

    // Change question color when mouse enters and leaves
    $(".question").hover(
        function (){
            $(this).css("color","blue");
        },
        function (){
            $(this).css("color","black");
        }
    );

    // Double-click any question to close all answers
    $(".question").dblclick(function (){
        $(".answer").hide();
    });

    // Highlight the parent FAQ item when input gets focus
    $(".faq-item input").focus(function (){
        $(this).parent().css("background-color","lightyellow");
    });

    // Reset background color when input loses focus
    $(".faq-item input").blur(function (){
        $(this).parent().css("background-color","white");
    });

});