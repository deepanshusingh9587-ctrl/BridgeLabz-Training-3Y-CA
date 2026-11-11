"use strict";

// Predicted output order:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

// setTimeout callback is a macrotask
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// Promise callback is a microtask
Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Explanation:
// Synchronous code runs first.
// After synchronous code, JavaScript processes microtasks.
// Then it processes macrotasks like setTimeout.
