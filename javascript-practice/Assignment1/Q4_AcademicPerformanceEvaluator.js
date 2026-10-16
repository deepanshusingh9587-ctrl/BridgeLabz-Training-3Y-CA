// Store marks of five subjects out of 100
let marks=[85,78,90,88,80];

// Calculate total, average and percentage
let total=0;

for(let mark of marks){
    total+=mark;
}

let average=total/marks.length;
let percentage=(total/(marks.length*100))*100;

// Check whether the student is promoted
if(marks.some(mark => mark < 35)){
    console.log("Detained");
}else if(percentage>=85){
    console.log("Promoted with Distinction");
}else if(percentage>=50){
    console.log("Promoted");
}else{
    console.log("Detained");
}

console.log(`Average: ${average.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);