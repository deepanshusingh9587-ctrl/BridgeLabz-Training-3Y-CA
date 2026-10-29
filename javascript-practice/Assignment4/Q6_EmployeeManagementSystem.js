"use strict";

class Employee{
    constructor(id,name,department,salary){
        this.id=id;
        this.name=name;
        this.department=department;
        this.salary=salary;
    }

    getAnnualSalary(){
        return this.salary*12;
    }

    applyBonus(percent){
        return this.getAnnualSalary()*percent/100;
    }
}

const employees=[
    new Employee(1,"Amit","IT",40000),
    new Employee(2,"Sara","HR",35000),
    new Employee(3,"Kiran","Sales",30000),
    new Employee(4,"Neha","IT",45000),
    new Employee(5,"Rahul","Finance",50000)
];

employees.forEach(employee => {
    console.log(`Employee: ${employee.name}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Annual Salary: ₹${employee.getAnnualSalary()}`);
    console.log(`10% Annual Bonus: ₹${employee.applyBonus(10)}`);
    console.log("--------------------");
});

// Calculate the company's total annual salary payout
const totalPayout=employees.reduce((total,employee) =>{
    return total+employee.getAnnualSalary();
},0);

console.log("Total Annual Company Payout: ₹"+totalPayout);
