"use strict";

const user={
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm=document.getElementById("userForm");
const userDetails=document.getElementById("userDetails");

// Display the initial object
userDetails.textContent=JSON.stringify(user,null,2);

userForm.addEventListener("submit",function(event){
    event.preventDefault();

    // Update the existing object with the entered values
    user.name=document.getElementById("name").value.trim();
    user.email=document.getElementById("email").value.trim();
    user.age=Number(document.getElementById("age").value);

    userDetails.textContent=JSON.stringify(user,null,2);
});
