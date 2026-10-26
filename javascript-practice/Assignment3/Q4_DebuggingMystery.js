"use strict";

function showMessage(){
    // Strict mode does not allow assigning to an undeclared variable.
    // Declaring greeting with let fixes the ReferenceError.
    let greeting="Welcome!";
    console.log(greeting);
}

showMessage();

// The call stack is: global scope -> showMessage() -> return to global scope.
