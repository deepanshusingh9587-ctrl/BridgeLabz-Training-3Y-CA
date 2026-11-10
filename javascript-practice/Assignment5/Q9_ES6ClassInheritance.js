"use strict";

// Parent class
class Person {
    constructor(name){
        this.name=name;
    }

    showName(){
        console.log("Name:",this.name);
    }
}

// Student class inherits from Person
class Student extends Person{
    constructor(name,branch){
        // Call parent constructor
        super(name);
        this.branch=branch;
    }

    showBranch(){
        console.log("Branch:",this.branch);
    }
}

// Create a student object
const student1=new Student("Deepanshu","CSE");

student1.showName();
student1.showBranch();

// Check inheritance
console.log(student1 instanceof Student);
console.log(student1 instanceof Person);
