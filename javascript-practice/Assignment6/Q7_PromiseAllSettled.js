"use strict";

// Load profile after 2 seconds
function loadProfile(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random()<0.3){
                reject("Profile loading failed");
            }else{
                resolve("Profile Loaded");
            }
        },2000);
    });
}

// Load posts after 1.5 seconds
function loadPosts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random()<0.3){
                reject("Posts loading failed");
            }else{
                resolve("Posts Loaded");
            }
        },1500);
    });
}

// Load messages after 1 second
function loadMessages(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random()<0.3){
                reject("Messages loading failed");
            }else{
                resolve("Messages Loaded");
            }
        },1000);
    });
}

async function loadDashboard(){
    const startTime=Date.now();

    // Wait for all promises, even if some fail
    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    console.log("Dashboard loading results:");

    results.forEach((result, index) => {
        const moduleNames=["Profile","Posts","Messages"];

        if(result.status==="fulfilled"){
            console.log(moduleNames[index]+": Success - "+result.value);
        }else{
            console.log(moduleNames[index] +": Failed - "+result.reason);
        }
    });

    const endTime=Date.now();

    console.log("Total time:",endTime-startTime,"milliseconds");
}

loadDashboard();
