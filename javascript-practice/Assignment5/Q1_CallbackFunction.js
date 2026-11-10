"use strict";

// This function prints the user's name and then calls the callback
function greetUser(name,callback){
    console.log(`Hello ${name}`);

    // Callback runs after the greeting
    callback();
}

function showEndMessage(){
    console.log("Welcome to the course!");
}

// Passing showEndMessage as a callback
greetUser("Deepanshu", showEndMessage);
