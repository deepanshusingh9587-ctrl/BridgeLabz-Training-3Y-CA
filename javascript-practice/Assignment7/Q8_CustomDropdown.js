"use strict";

const dropdownButton=document.getElementById("dropdownButton");
const options=document.getElementById("options");

dropdownButton.addEventListener("click",function(){
    if(options.style.display==="block"){
        options.style.display="none";
    }else{
        options.style.display="block";
    }
});

options.addEventListener("click",function(event){
    if(event.target.classList.contains("option")){
        dropdownButton.textContent=event.target.textContent;
        options.style.display="none";
    }
});

// Close dropdown when clicking somewhere else
document.addEventListener("click",function(event){
    if(!event.target.closest("#dropdownButton")&&
        !event.target.closest("#options")){
        options.style.display="none";
    }
});