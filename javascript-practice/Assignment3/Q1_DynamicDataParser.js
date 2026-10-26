"use strict";

// Mixed data received from an API
const apiData=["25","true","false","NaN","","100px","3.14",null,undefined];

const validNumbers=[];
const invalidNumbers=[];

for(let i=0;i<apiData.length;i++){
    const value=apiData[i];
    const numberValue=Number(value);
    const booleanValue=Boolean(value);
    const stringValue=String(value);

    // NaN values are invalid numbers, but are recorded separately
    if(Number.isNaN(numberValue)){
        invalidNumbers.push(value);
    }else{
        validNumbers.push(numberValue);
    }

    console.log(`Original: ${stringValue}`);
    console.log(`Number: ${numberValue}`);
    console.log(`Boolean: ${booleanValue}`);
    console.log(`String: ${stringValue}`);
    console.log("--------------------");
}

console.log("Valid numbers:", validNumbers);
console.log("Invalid numbers:", invalidNumbers);
