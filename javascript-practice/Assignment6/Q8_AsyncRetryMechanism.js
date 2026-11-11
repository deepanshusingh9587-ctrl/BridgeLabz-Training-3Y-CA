"use strict";

// This function has a 50% chance of failure
function submitOrder(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random()<0.5){
                reject("Order submission failed");
            } else{
                resolve("Order submitted successfully");
            }
        },1000);
    });
}

// Try submitting the order up to 3 times
async function processOrder(){
    for(let attempt=1;attempt<=3;attempt++){
        try{
            const result=await submitOrder();

            console.log(`Attempt ${attempt}: Success`);
            console.log(result);

            return;
        }catch(error){
            console.log(`Attempt ${attempt}: Failed`);
            console.log(error);
        }
    }

    // Runs only if all three attempts fail
    throw new Error("Order could not be processed");
}

async function startOrder(){
    try{
        await processOrder();
    } catch (error) {
        console.log("Final Error:", error.message);
    }
}

startOrder();
