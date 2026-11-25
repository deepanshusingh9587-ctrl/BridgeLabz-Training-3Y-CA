$(document).ready(function (){

    // Highlight direct reports when a manager is clicked
    $(".manager").click(function (){
        $(this).siblings(".employee").toggleClass("highlight");
    });

    // Show employee contact information using next()
    $(".employee:not(.manager)").hover(
        function () {
            $(this).next(".contact").show();
        },
        function () {
            $(this).next(".contact").hide();
        }
    );

    // Change background of all employees in a department using children()
    $(".departmentName").click(function (){
        $(this).parent().children(".team")
            .children(".employee").toggleClass("selected");
    });

    // Select a random employee and highlight sibling employees
    $("#randomEmployee").click(function (){

        const employees=$(".employee:not(.manager)");
        const randomIndex=Math.floor(Math.random()*employees.length);

        const selectedEmployee=employees.eq(randomIndex);

        $(".employee").removeClass("highlight");

        selectedEmployee.siblings(".employee").addClass("highlight");
    });

    // Collapse or expand the IT team using parent() and find()
    $("#toggleTeam").click(function (){

        const team = $(this)
            .parent()
            .find(".department")
            .first()
            .find(".team");

        team.toggle();

    });

});