"use strict";

// Each coffee step takes a random time between 1 and 2 seconds
function boilWater(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random()<0.1){
                reject("Water boiling failed!");
            } else {
                console.log("Water boiled.");
                resolve();
            }
        },1000+Math.random()*1000);
    });
}

function brewCoffee(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random()<0.1){
                reject("Coffee brewing failed!");
            }else{
                console.log("Coffee brewed.");
                resolve();
            }
        },1000+Math.random()*1000);
    });
}

function pourCoffee(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random()<0.1){
                reject("Pouring coffee failed!");
            }else{
                console.log("Coffee poured into the cup.");
                resolve();
            }
        },1000+Math.random()*1000);
    });
}

// Promise chaining runs each step in order
boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Coffee process failed:", error);
    });
