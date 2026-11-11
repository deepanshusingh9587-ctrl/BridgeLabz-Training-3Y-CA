"use strict";

// Each delivery step takes 1-2 seconds
// and has a chance of failure.
function deliveryStep(stepName,successMessage){
    return new Promise((resolve, reject) => {
        const delay=1000+Math.random()*1000;

        setTimeout(() => {
            if(Math.random()<0.2){
                reject(`${stepName} failed`);
            }else{
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

// Run all delivery steps one by one
async function runPipeline(){
    console.log("Start Pipeline");

    try{
        await deliveryStep("Take Order", "Step 1: Order taken");

        await deliveryStep("Prepare", "Step 2: Food prepared");

        await deliveryStep("Pack", "Step 3: Package ready");

        await deliveryStep("Dispatch", "Step 4: Out for delivery");

        await deliveryStep("Deliver", "Step 5: Order delivered");

        console.log("Delivery completed!");

    }catch(error){
        console.log("Pipeline failed:",error);
    }
}

runPipeline();
