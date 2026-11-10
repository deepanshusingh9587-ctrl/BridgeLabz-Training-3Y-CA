"use strict";

// First constructor: Person
function Person(name){
    this.name=name;
}

Person.prototype.showName=function (){
    console.log("Name:",this.name);
};

// Second constructor: Faculty inherits Person
function Faculty(name,subject){
    Person.call(this,name);
    this.subject=subject;
}

Faculty.prototype=Object.create(Person.prototype);
Faculty.prototype.constructor=Faculty;

Faculty.prototype.showSubject=function (){
    console.log("Subject:",this.subject);
};

// Third constructor: Professor inherits Faculty
function Professor(name,subject,researchArea){
    Faculty.call(this,name,subject);
    this.researchArea=researchArea;
}

Professor.prototype=Object.create(Faculty.prototype);
Professor.prototype.constructor=Professor;

Professor.prototype.showResearch=function (){
    console.log("Research Area:",this.researchArea);
};

// Create a Professor object
const professor1=new Professor(
    "Dr. Sharma",
    "Computer Science",
    "Artificial Intelligence"
);

// Access methods from the complete prototype chain
professor1.showName();
professor1.showSubject();
professor1.showResearch();
