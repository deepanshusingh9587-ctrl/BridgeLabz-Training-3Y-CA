"use strict";

const transactions =[
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions=[];
const invalidTransactions=[];

for(let i=0;i<transactions.length;i++){
    try{
        const transaction=transactions[i];

        if(transaction===null||transaction===undefined){
            throw new Error("Null transaction");
        }

        if(transaction.id===undefined||transaction.amount===undefined){
            throw new Error("Missing amount or id");
        }

        if(transaction.amount<0){
            throw new Error("Negative amount");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id} is valid.`);
    }catch(error){
        invalidTransactions.push({
            index: i,
            reason: error.message
        });

        console.log(`Transaction at index ${i}: ${error.message}`);
    }
}

console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log("Successful count:", validTransactions.length);
console.log("Failed count:", invalidTransactions.length);

// Debugging tip: set a breakpoint inside the loop and inspect transaction.
