"use strict";

const form=document.getElementById("registrationForm");

const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const passwordInput=document.getElementById("password");

const nameError=document.getElementById("nameError");
const emailError=document.getElementById("emailError");
const passwordError=document.getElementById("passwordError");

const successMessage=document.getElementById("successMessage");

form.addEventListener("submit",function(event){

    // Stop form submission until validation is complete
    event.preventDefault();

    nameError.textContent="";
    emailError.textContent="";
    passwordError.textContent="";
    successMessage.textContent="";

    let isValid=true;

    if(nameInput.value.trim()===""){
        nameError.textContent=" Name is required";
        isValid=false;
    }

    if(!emailInput.value.includes("@")){
        emailError.textContent=" Enter a valid email";
        isValid=false;
    }

    if(passwordInput.value.length<6){
        passwordError.textContent=" Password must contain 6 characters";
        isValid=false;
    }

    if(isValid){
        successMessage.textContent="Form Submitted Successfully";
    }
});

// Errors disappear automatically when user corrects input
nameInput.addEventListener("input",function(){
    if(nameInput.value.trim()!==""){
        nameError.textContent="";
    }
});

emailInput.addEventListener("input",function(){
    if(emailInput.value.includes("@")){
        emailError.textContent="";
    }
});

passwordInput.addEventListener("input",function(){
    if(passwordInput.value.length>= 6){
        passwordError.textContent="";
    }
});