$(document).ready(function (){

    // Add a new post at the end of the list
    $("#addPost").click(function (){

        const newPost = `
            <article class="post">
                <h2>New Blog Post</h2>
                <p>This is a newly added blog post.</p>
            </article>
        `;

        $("#postList").append(newPost);
    });

    // Add a featured post at the beginning
    $("#featuredPost").click(function (){

        const featuredPost = `
            <article class="post">
                <h2>Featured Post</h2>
                <p>This is our featured blog post.</p>
            </article>
        `;

        $("#postList").prepend(featuredPost);
    });

    // Remove the last post
    $("#removePost").click(function (){
        $("#postList").children(".post").last().remove();
    });

    // Place tags before and after the first post
    $("#addTag").click(function (){

        const firstPost=$("#postList").children(".post").first();

        firstPost.before('<p class="tag">Latest Blog</p>');
        firstPost.after('<p class="tag">End of Featured Post</p>');
    });

    // Highlight posts containing specific keywords
    $("#highlightPost").click(function (){

        $(".post").each(function (){

            const postText=$(this).text().toLowerCase();

            if(postText.includes("javascript") || postText.includes("technology")){

                $(this).addClass("highlight");

            }

        });

    });

});