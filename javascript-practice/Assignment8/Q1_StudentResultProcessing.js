// Student class stores name and marks
class Student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }

    // Calculate average using reduce()
    calculateAverage(){
        const totalMarks=this.marks.reduce(
            (total,mark) => total+mark,0
        );

        return totalMarks/this.marks.length;
    }

    // Return grade according to average marks
    getGrade(){
        const average=this.calculateAverage();

        if(average>=80){
            return "A";
        }else if(average>=60){
            return "B";
        }else if(average>=40){
            return "C";
        }else{
            return "F";
        }
    }
}

// Test with three students
const students = [
    new Student("Amit", [85, 90, 80, 88]),
    new Student("Riya", [65, 70, 60, 75]),
    new Student("Karan", [30, 35, 40, 25])
];

students.forEach((student) => {
    console.log("Student:",student.name);
    console.log("Average:",student.calculateAverage());
    console.log("Grade:",student.getGrade());
    console.log("----------------------");
});
