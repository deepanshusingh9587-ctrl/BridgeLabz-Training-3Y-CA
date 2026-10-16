// Generate two random numbers between 1 and 20
let firstNumber=Math.floor(Math.random()*20)+1;
let secondNumber=Math.floor(Math.random()*20)+1;

// Select a random arithmetic operator
let operators=["+","-","*","/"];
let operator=operators[Math.floor(Math.random()*operators.length)];

let answer;

// Calculate the correct answer
switch(operator){
    case "+":
        answer=firstNumber+secondNumber;
        break;
    case "-":
        answer=firstNumber-secondNumber;
        break;
    case "*":
        answer=firstNumber*secondNumber;
        break;
    case "/":
        answer=firstNumber/secondNumber;
        break;
}

// Display the question and answer
console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
console.log(`Correct Answer: ${operator==="/"?answer.toFixed(2):answer}`);