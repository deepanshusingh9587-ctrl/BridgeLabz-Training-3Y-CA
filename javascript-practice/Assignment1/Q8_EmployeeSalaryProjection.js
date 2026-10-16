// Store the current salary and yearly increment rate
let currentSalary=30000;
let incrementRate=10;
let salary=currentSalary;

let salaryDetails=[];

for(let year=1;year<=5;year++){
    // Increase salary by the given percentage
    salary+=salary*incrementRate/100;

    // Round salary to two decimal places
    salary=Math.round(salary*100)/100;

    salaryDetails.push({
        Year: year,
        Salary: salary.toFixed(2)
    });
}

// Display the yearly salary table
console.table(salaryDetails);