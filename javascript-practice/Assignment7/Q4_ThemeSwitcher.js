"use strict";

const buttons=document.querySelectorAll("button");

buttons.forEach(function (button){
    button.addEventListener("click",function(){
        const selectedTheme=button.getAttribute("data-theme");

        document.body.setAttribute("data-theme",selectedTheme);

        if(selectedTheme==="light"){
            document.body.style.backgroundColor="white";
            document.body.style.color="black";
        }else if(selectedTheme==="dark"){
            document.body.style.backgroundColor="black";
            document.body.style.color="white";
        }else if(selectedTheme==="blue"){
            document.body.style.backgroundColor="lightblue";
            document.body.style.color="black";
        }
    });
});