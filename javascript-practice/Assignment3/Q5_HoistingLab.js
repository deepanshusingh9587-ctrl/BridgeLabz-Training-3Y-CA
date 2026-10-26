"use strict";

// Original sequence: score is hoisted, but its value is initially undefined.
// console.log(score);
// announce();
// var score = 50;
// function announce() {
//     console.log("Game started");
// }

// Corrected version
var score=50;

function announce(){
    console.log("Game started");
}

let status="ready";

function startGame(){
    console.log(status);
}

console.log(score);
announce();
startGame();

// Function declarations are hoisted.
// Arrow functions are not usable before their initialization.
const announceArrow=() => console.log("Game started");
announceArrow();
