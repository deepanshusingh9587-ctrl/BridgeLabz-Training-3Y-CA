"use strict";

const form=document.getElementById("studentForm");
const message=document.getElementById("message");

form.addEventListener("submit", function (event){
    event.preventDefault();

    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const phone=document.getElementById("phone");
    const password=document.getElementById("password");

    const fields=[
        { input: name, valid: /^[A-Za-z]+$/.test(name.value.trim()), label: "Name must contain alphabets only." },
        { input: email, valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()), label: "Enter a valid email." },
        { input: phone, valid: /^\d{10}$/.test(phone.value.trim()), label: "Phone must contain exactly 10 digits." },
        { input: password, valid: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/.test(password.value), label: "Password needs an uppercase letter, a number and a special character." }
    ];

    const errors=[];

    fields.forEach(function (field){
        field.input.classList.remove("valid","invalid");

        if(field.valid){
            field.input.classList.add("valid");
        }else{
            field.input.classList.add("invalid");
            errors.push(field.label);
        }
    });

    message.style.color=errors.length ? "red" : "green";
    message.textContent=errors.length ? errors.join(" ") : "Registration successful!";
});
