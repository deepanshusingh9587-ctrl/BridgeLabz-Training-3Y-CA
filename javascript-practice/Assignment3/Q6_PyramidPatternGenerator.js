"use strict";

const rows=5; // Change this value to generate a different size

// Using let: each loop iteration has its own block-scoped variable.
for(let i=1;i<=rows;i++){
    let pattern="";

    for(let j=1;j<=i;j++){
        pattern+="* ";
    }

    console.log(pattern);
}

// Comparison: var is function-scoped, so the same variable is reused.
for(var k=1;k<=3;k++){
    console.log("var loop value:",k);
}

// In strict mode, assigning to an undeclared loop variable causes an error.
// Example (do not uncomment): for (i = 1; i <= 3; i++) {}
