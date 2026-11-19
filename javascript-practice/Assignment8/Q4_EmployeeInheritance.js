// Parent class
class Employee{
    constructor(name,department){
        this.name=name;
        this.department=department;
    }

    work(){
        console.log(this.name,"is working in",this.department);
    }
}

// Manager inherits from Employee
class Manager extends Employee{
    work(){
        console.log(this.name,"is managing the",this.department,"team");
    }
}

// Create objects
const employee1=new Employee("Amit","IT");
const manager1=new Manager("Riya","HR");

// Runtime polymorphism
// Same method name gives different output for different objects
employee1.work();
manager1.work();
