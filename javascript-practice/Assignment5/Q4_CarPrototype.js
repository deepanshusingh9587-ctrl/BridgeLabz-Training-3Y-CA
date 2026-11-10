"use strict";

// Constructor function for creating cars
function Car(brand,model){
    this.brand=brand;
    this.model=model;
}

// Shared method added to the Car prototype
Car.prototype.getDetails=function (){
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

// Create two car objects
const car1 = new Car("Tata","Nexon");
const car2 = new Car("Mahindra","Thar");

// Both objects use the same prototype method
car1.getDetails();
car2.getDetails();

// Check that the method is shared
console.log(car1.getDetails===car2.getDetails);
