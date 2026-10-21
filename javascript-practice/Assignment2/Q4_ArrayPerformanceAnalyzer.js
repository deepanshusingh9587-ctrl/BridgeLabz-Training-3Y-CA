// Generate 8 random scores between 30 and 100
let scores=Array.from({ length: 8 },() => Math.floor(Math.random()*71)+30
);

// Calculate highest and lowest scores
let highestScore=Math.max(...scores);
let lowestScore=Math.min(...scores);

// Calculate average score
let totalScore=scores.reduce((sum,score) => sum+score,0);
let averageScore=totalScore/scores.length;

// Count students who passed
let passedStudents=scores.filter(score => score >= 50).length;

// Display the summary
console.log("Student Scores:",scores);
console.log("Highest Score:",highestScore);
console.log("Lowest Score:",lowestScore);
console.log("Average Score:",averageScore.toFixed(2));
console.log("Students Passed:",passedStudents);
