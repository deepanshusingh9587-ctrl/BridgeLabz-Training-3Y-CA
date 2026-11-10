"use strict";

// This function applies the given operation to every number
function applyOperation(numbers, operation) {
    const result=[];

    for(let i=0;i<numbers.length;i++){
        result.push(operation(numbers[i]));
    }

    return result;
}

// Callback to double a number
function doubleNumber(number){
    return number*2;
}

// Callback to square a number
function squareNumber(number){
    return number*number;
}

const numbers=[1,2,3,4];

const doubledNumbers=applyOperation(numbers,doubleNumber);
const squaredNumbers=applyOperation(numbers,squareNumber);

console.log("Original numbers:",numbers);
console.log("Doubled numbers:",doubledNumbers);
console.log("Squared numbers:",squaredNumbers);
