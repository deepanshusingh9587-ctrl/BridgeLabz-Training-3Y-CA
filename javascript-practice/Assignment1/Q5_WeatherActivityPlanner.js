// Store the current weather details
let temperature=28;
let isRaining=false;
let windSpeed=10;

// Suggest an activity based on the weather
if(isRaining){
    console.log("Stay indoors with hot coffee.");
}else if(temperature>35){
    console.log("Go swimming.");
}else if(temperature<15 && windSpeed>20){
    console.log("Too cold and windy — stay home.");
}else{
    console.log("Perfect day for a walk.");
}