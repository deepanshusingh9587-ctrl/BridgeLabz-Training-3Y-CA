"use strict";

const message=document.getElementById("message");
const counter=document.getElementById("counter");
const resetButton=document.getElementById("resetButton");

const maxCharacters=100;

message.addEventListener("input",function(event){
    const usedCharacters=message.value.length;
    const remainingCharacters=maxCharacters-usedCharacters;

    counter.textContent=remainingCharacters+" characters remaining";

    // Warning when only 20 characters are left
    if(remainingCharacters<=20 && remainingCharacters>0){
        counter.style.color="orange";
    }else{
        counter.style.color="black";
    }

    // Stop typing when limit reaches zero
    if(remainingCharacters===0){
        event.preventDefault();
        counter.style.color="red";
    }
});

resetButton.addEventListener("click",function(){
    message.value="";
    counter.textContent="100 characters remaining";
    counter.style.color="black";
});