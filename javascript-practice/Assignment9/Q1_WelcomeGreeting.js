$(document).ready(function (){

    const greeting=$("#greeting");

    // Display greeting according to the current time
    const currentHour=new Date().getHours();

    if(currentHour<12){
        greeting.text("Good Morning!");
    }else if(currentHour<17){
        greeting.text("Good Afternoon!");
    }else{
        greeting.text("Good Evening!");
    }

    // Change greeting into a motivational quote
    $("#changeGreeting").click(function (){
        greeting.text("Believe in yourself and keep moving forward!");
    });

    // Show or hide the welcome message
    $("#toggleMessage").click(function (){
        $("#welcomeMessage").toggle();
    });

    // Display an alert when greeting is clicked
    greeting.click(function (){
        alert("Have a wonderful day!");
    });

});