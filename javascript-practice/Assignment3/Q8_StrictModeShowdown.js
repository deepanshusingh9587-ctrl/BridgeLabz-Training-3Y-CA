"use strict";

// Strict mode prevents undeclared assignments.
function demo(a,b){
    let total=a+b;
    console.log("Total:",total);

    // Deleting a local variable is not allowed in strict mode.
    // delete total; // Would cause a SyntaxError
}

try{
    demo(5,10);
}catch(error){
    console.log("Strict mode error:",error.message);
}

// Correct ES6 version: declare variables and use distinct parameters.
const calculateTotal=(first, second) =>{
    const total=first+second;
    return total;
};

console.log("Correct total:",calculateTotal(5,10));
