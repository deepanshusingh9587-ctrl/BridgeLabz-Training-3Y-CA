"use strict";

// This function remembers the multiplier value
function makeMultiplier(multiplier){

    // Inner function uses the multiplier from outer function
    return function(number){
        return number*multiplier;
    };
}

// Create a function that multiplies by 3
const triple=makeMultiplier(3);

// Create a function that multiplies by 2
const double=makeMultiplier(2);

console.log("Triple of 5:",triple(5));
console.log("Double of 5:",double(5));
