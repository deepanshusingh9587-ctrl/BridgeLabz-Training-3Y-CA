"use strict";

const images=document.querySelectorAll(".gallery img");
const modal=document.getElementById("modal");
const largeImage=document.getElementById("largeImage");

images.forEach(function (image){
    image.addEventListener("click",function(){
        largeImage.src=image.src;
        modal.style.display="flex";
    });
});

// Clicking outside the image closes the modal
modal.addEventListener("click",function(){
    modal.style.display="none";
});

// Image click should not close the modal
largeImage.addEventListener("click",function(event){
    event.stopPropagation();
});