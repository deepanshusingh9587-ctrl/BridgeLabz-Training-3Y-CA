$(document).ready(function (){

    let notificationsEnabled=false;

    // Show a message after an action
    function showMessage(message){
        $("#message").text(message);
    }

    // Subscribe and enable notifications
    $("#subscribe").click(function (){
        notificationsEnabled=true;
        showMessage("You have subscribed successfully.");
    });

    // Unsubscribe and disable notifications
    $("#unsubscribe").click(function (){
        notificationsEnabled=false;
        showMessage("Notifications have been disabled.");
    });

    // Attach click event to subscription topics
    function topicClick(){
        if(notificationsEnabled){
            showMessage("Subscribed to "+$(this).text());
        }else{
            showMessage("Please subscribe first.");
        }
    }

    $(".topic").on("click",topicClick);

    // Add a new topic and attach its click event
    $("#addTopic").click(function () {
        const newTopic=$("<button>")
            .addClass("topic")
            .text("New Topic");

        newTopic.on("click", topicClick);

        $("#topicList").append(newTopic);

        showMessage("New topic added successfully.");
    });

    // Remove the last topic and detach its click event
    $("#removeTopic").click(function () {
        const lastTopic = $(".topic").last();

        if(lastTopic.length>0){
            lastTopic.off("click",topicClick);
            lastTopic.remove();

            showMessage("Last topic removed.");
        }
    });

});