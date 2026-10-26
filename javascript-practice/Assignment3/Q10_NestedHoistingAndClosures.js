"use strict";

function outer(){
    // count is hoisted inside outer(), but not initialized yet.
    console.log("Outer count:",count);

    var count=5;

    function inner(){
        // This count belongs to inner() and starts as undefined.
        console.log("Inner count:",count);

        var count=10;
        console.log("Inner count after assignment:",count);
    }

    inner();

    console.log("Outer count after inner:",count);
}

outer();

// Arrow function version
function outerArrowExample(){
    let count=5;

    const inner=() =>{
        // The arrow function can access the outer variable through closure.
        console.log("Arrow reads outer count:", count);
    };

    inner();
}

outerArrowExample();

// Debugging tip: set breakpoints at each console.log and inspect the Call Stack.
