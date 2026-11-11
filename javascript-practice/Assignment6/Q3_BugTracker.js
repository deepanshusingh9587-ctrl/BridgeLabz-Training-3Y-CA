"use strict";

// Promise-based function to fetch bugs
function getBugs(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hasError=Math.random()<0.5;

            if(hasError){
                reject("API request failed!");
            }else{
                const bugs=[
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ];

                resolve(bugs);
            }
        },1000);
    });
}

// Fetch bugs and handle the result
getBugs()
    .then((bugs) => {
        console.log("Bug list:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:",error);
    });
