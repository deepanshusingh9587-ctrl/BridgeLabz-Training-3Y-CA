$(document).ready(function (){

    // Highlight a product when it is clicked
    $(".product").click(function (){
        $(this).toggleClass("highlight");
    });

    // Show product details on hover
    $(".product").hover(
        function (){
            $(this).find(".details").show();
        },
        function (){
            $(this).find(".details").hide();
        }
    );

    // Toggle selected class on favorite button
    $(".favorite").click(function (event){
        event.stopPropagation();
        $(this).toggleClass("selected");
    });

    // Apply a different border to discounted products
    $('[data-discount="yes"]').addClass("discount");

    // Show alert if the selected product is out of stock
    $(".product").click(function (){
        if ($(this).data("stock")==="out"){
            alert("Sorry, this product is currently out of stock.");
        }
    });

});