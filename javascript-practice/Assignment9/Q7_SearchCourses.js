$(document).ready(function (){

    const courses=$(".course");

    // Filter courses whenever the user types
    $("#searchInput").keyup(function (){

        const searchText=$(this).val().toLowerCase();
        let matchedCount=0;

        courses.each(function (){

            const courseName=$(this).find("h3").text().toLowerCase();

            if(courseName.includes(searchText)){

                // Show matching course
                $(this).show();

                // Highlight the matching course
                if(searchText!==""){
                    $(this).find("h3").css({
                        "background-color": "yellow",
                        "font-weight": "bold"
                    });
                }else{
                    $(this).find("h3").css({
                        "background-color":"transparent",
                        "font-weight":"normal"
                    });
                }

                matchedCount++;

            }else{

                // Hide courses that do not match
                $(this).hide();

            }

        });

        // Display the number of matching courses
        $("#courseCount").text("Matched Courses: "+matchedCount);
    });

    // Clear search and display all courses
    $("#clearSearch").click(function (){

        $("#searchInput").val("");

        courses.show();

        courses.find("h3").css({
            "background-color": "transparent",
            "font-weight": "normal"
        });

        $("#courseCount").text("Total Courses: "+courses.length);

    });

});