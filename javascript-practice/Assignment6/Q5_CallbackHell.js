"use strict";

// First version: nested callbacks (callback hell)

function design(callback){
    setTimeout(() => {
        console.log("Design completed");

        callback();
    }, 1000);
}

function build(callback){
    setTimeout(() => {
        console.log("Build completed");

        callback();
    }, 1000);
}

function test(callback){
    setTimeout(() => {
        console.log("Testing completed");

        callback();
    }, 1000);
}

function deploy(callback){
    setTimeout(() => {
        console.log("Deployment completed");

        callback();
    }, 1000);
}

function celebrate(){
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

console.log("Starting callback pipeline");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate();
            });
        });
    });
});

// Second version: same pipeline using async/await

function runStage(stageName){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName + " completed");
            resolve();
        },1000);
    });
}

async function runPipeline(){
    console.log("\nStarting async/await pipeline");

    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");

    console.log("Project completed successfully!");
}

runPipeline();

// async/await improves readability because the steps
// are written in a simple sequence instead of nested callbacks.
