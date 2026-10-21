let count=0;

// Increase the counter
function increment(){
    count++;
    console.log("Current Count:",count);
}

// Decrease the counter
function decrement(){
    count--;
    console.log("Current Count:",count);
}

// Nested function to display the current count
function showCounter(){
    function displayCount(){
        console.log("Counter Value:",count);
    }

    displayCount();
}

// Simulate click events
increment();
increment();
decrement();
showCounter();
