$(document).ready(function (){

    // Sample emails that are already registered
    const registeredEmails =[
        "amit@gmail.com",
        "riya@gmail.com"
    ];

    $("#registrationForm").submit(function (event){

        // Prevent form submission until validation is complete
        event.preventDefault();

        const name=$("#name").val().trim();
        const email=$("#email").val().trim();
        const password=$("#password").val();

        let isValid=true;

        // Reset previous errors and borders
        $("input").css("border","1px solid gray");
        $(".error").text("");
        $("#successMessage").text("");

        // Check name field
        if(name===""){
            $("#name").css("border", "2px solid red");
            $("#nameError").text("Name is required.");
            isValid=false;
        }

        // Check email format
        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email)){
            $("#email").css("border","2px solid red");
            $("#emailError").text("Please enter a valid email.");
            isValid=false;

        }else if(registeredEmails.includes(email.toLowerCase())){

            // Check whether email is already registered
            $("#email").css("border", "2px solid red");
            $("#emailError").text("Email is already registered.");
            isValid=false;
        }

        // Check password length
        if(password.length<8){
            $("#password").css("border","2px solid red");
            $("#passwordError").text("Password must be at least 8 characters.");
            isValid=false;
        }

        // Show success message if every field is valid
        if(isValid){
            $("#successMessage")
                .css("color","green")
                .text("Registration successful!");
        }

    });

});