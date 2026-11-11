"use strict";

// Simulate a server response
function serverResponse(serverName,seconds){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random()<0.2){
                reject(`${serverName} failed to respond`);
            }else{
                resolve(`${serverName} responded successfully`);
            }
        }, seconds*1000);
    });
}

const serverA=serverResponse("Server A", 2);
const serverB=serverResponse("Server B", 3);

// Promise.all waits for both servers to finish
Promise.all([serverA, serverB])
    .then((responses) => {
        console.log("Deployment completed for all servers:");
        responses.forEach(response => console.log(response));
    })
    .catch((error) => {
        console.log("Deployment error:",error);
    });

// Promise.race gives the result of the first settled promise
Promise.race([
    serverResponse("Server A",2),
    serverResponse("Server B",3)
])
    .then((response) => {
        console.log("Fastest response:", response);
    })
    .catch((error) => {
        console.log("Fastest response failed:", error);
    });
