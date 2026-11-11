"use strict";

console.log("Start");

// setTimeout callback goes to the macrotask queue
setTimeout(() => {
    console.log("setTimeout callback - Macrotask");
}, 0);

// Promise callback goes to the microtask queue
Promise.resolve().then(() => {
    console.log("Promise callback - Microtask");
});

// Normal synchronous statement
console.log("Synchronous log");

console.log("End");

// Explanation:
// First, JavaScript executes all synchronous statements.
// After that, it runs microtasks.
// Finally, it runs macrotasks like setTimeout.
// Therefore, Promise callbacks run before setTimeout callbacks.
