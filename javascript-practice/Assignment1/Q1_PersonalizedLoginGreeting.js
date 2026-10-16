// Store the user's name and current hour
let userName="Deepanshu";
let currentHour=new Date().getHours();

// Display a greeting based on the current time
if(currentHour<12){
    console.log(`Good Morning ${userName}!`);
}else if(currentHour<17){
    console.log(`Good Afternoon ${userName}!`);
}else{
    console.log(`Good Evening ${userName}!`);
}