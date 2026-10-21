let bonus=5000;

function calculateSalary(isPermanent){
    // Local salary variable
    let salary=40000;
    let totalSalary=salary;

    // Add bonus only for permanent employees
    if(isPermanent===true){
        totalSalary=salary+bonus;
    }

    console.log("Permanent Employee:",isPermanent);
    console.log("Total Salary:",totalSalary);
}

// Test both conditions
calculateSalary(true);
calculateSalary(false);

// Global bonus remains unchanged
console.log("Global Bonus:",bonus);
