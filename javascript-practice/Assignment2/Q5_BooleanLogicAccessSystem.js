let isDoorLocked=true;
let isWindowClosed=true;
let isAlarmOn=true;
let isOwnerInside=true;

// Check all security conditions
let isSecure=isDoorLocked&&isWindowClosed&&isAlarmOn&&isOwnerInside;

if(isSecure){
    console.log("Secure");
}else{
    console.log("Unsafe");
}

// Change values and test another outcome
isOwnerInside=false;

isSecure=isDoorLocked&&isWindowClosed&&isAlarmOn&&isOwnerInside;

console.log(isSecure ? "Secure" : "Unsafe");
