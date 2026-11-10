"use strict";

// Parent constructor
function Person(name){
    this.name=name;
}

// Method available to Person objects
Person.prototype.showName=function (){
    console.log("Name:",this.name);
};

// Child constructor
function Student(name,branch){
    Person.call(this,name);
    this.branch=branch;
}

// Connect Student prototype to Person prototype
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;

// Method available to Student objects
Student.prototype.showBranch=function (){
    console.log("Branch:",this.branch);
};

const student1=new Student("Deepanshu","CSE");

// Calling both parent and child methods
student1.showName();
student1.showBranch();

// Check prototype chain
console.log(student1 instanceof Student);
console.log(student1 instanceof Person);
