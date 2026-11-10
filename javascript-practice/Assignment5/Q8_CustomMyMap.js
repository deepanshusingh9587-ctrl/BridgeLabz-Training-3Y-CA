"use strict";

// Add a custom myMap method to Array prototype
Array.prototype.myMap=function (callback){
    const result=[];

    // Apply callback to each element and store the result
    for(let i=0;i<this.length;i++){
        if(i in this){
            result[i]=callback(this[i],i,this);
        }
    }

    // Return a new array without changing the original
    return result;
};

const numbers=[1,2,3];

// Double each number using custom myMap
const doubledNumbers=numbers.myMap(function (number){
    return number*2;
});

// Square each number using custom myMap
const squaredNumbers=numbers.myMap(number => number*number);

console.log("Original Array:",numbers);
console.log("Doubled Array:",doubledNumbers);
console.log("Squared Array:",squaredNumbers);
