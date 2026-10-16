// Generate a secret number between 1 and 50
let secretNumber=Math.floor(Math.random()*50)+1;

// Store a test guess
let userGuess=25;

// Check the guess
if(userGuess===secretNumber){
    console.log("Correct guess!");
}else if(Math.abs(userGuess-secretNumber)<=3){
    console.log("Very close!");
}else if(userGuess>secretNumber){
    console.log("Too high");
}else{
    console.log("Too low");
}

// Display the secret number for testing
console.log(`Secret Number: ${secretNumber}`);