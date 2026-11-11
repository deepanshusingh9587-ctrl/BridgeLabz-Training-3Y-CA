"use strict";

const step1=document.getElementById("step1");
const step2=document.getElementById("step2");
const step3=document.getElementById("step3");
const summary=document.getElementById("summary");

const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const passwordInput=document.getElementById("password");

document.getElementById("next1").addEventListener("click",function(){
    if(nameInput.value.trim()===""){
        alert("Please enter your name.");
        return;
    }

    step1.style.display="none";
    step2.style.display="block";
});

document.getElementById("next2").addEventListener("click", function(){
    if(!emailInput.value.includes("@")){
        alert("Please enter a valid email.");
        return;
    }

    step2.style.display="none";
    step3.style.display="block";
});

document.getElementById("back2").addEventListener("click",function(){
    step2.style.display="none";
    step1.style.display="block";
});

document.getElementById("back3").addEventListener("click",function(){
    step3.style.display="none";
    step2.style.display="block";
});

document.getElementById("finish").addEventListener("click",function(){
    if(passwordInput.value.length<6){
        alert("Password must contain at least 6 characters.");
        return;
    }

    step3.style.display="none";
    summary.style.display="block";

    summary.innerHTML = `
        <h3>Registration Complete</h3>
        <p>Name: ${nameInput.value}</p>
        <p>Email: ${emailInput.value}</p>
        <p>Password: ******</p>
    `;
});