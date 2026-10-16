// Store monthly expenses for five categories
let expenses=[5000,2000,8000,3000,1500];

// Calculate total expenses
let total=0;

for(let expense of expenses){
    total+=expense;
}

// Calculate average and add 10% tax
let average=total/expenses.length;
let tax=total*0.10;
total+=tax;

// Display the results
console.log(`Total Expenses: Rs. ${(total - tax).toFixed(2)}`);
console.log(`Average Expense: Rs. ${average.toFixed(2)}`);
console.log(`Tax (10%): Rs. ${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: Rs. ${total.toFixed(2)}`);