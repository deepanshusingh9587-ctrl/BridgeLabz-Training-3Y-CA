let feedback="Great product! Fast delivery and amazing sound quality!";

// Count the words
let words=feedback.split(" ");
console.log("Word Count:",words.length);

// Check for negative feedback
let lowerFeedback=feedback.toLowerCase();

if(lowerFeedback.includes("bad")||lowerFeedback.includes("poor")){
    console.log("Needs Improvement");
}else{
    console.log("Positive Feedback");
}
