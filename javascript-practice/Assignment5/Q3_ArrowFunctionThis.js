"use strict";

const user={
    name: "Deepanshu",

    // Arrow function does not have its own this
    showName: () => {
        console.log("Arrow function name:",this.name);
    }
};

user.showName();

// Fix: use a normal function as an object method
const updatedUser={
    name: "Deepanshu",

    showName: function (){
        console.log("Normal function name:",this.name);
    }
};

updatedUser.showName();
