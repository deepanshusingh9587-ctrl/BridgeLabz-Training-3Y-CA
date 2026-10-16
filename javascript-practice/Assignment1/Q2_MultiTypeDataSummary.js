// Store values of different data types
let userName="Deepanshu";
let age=20;
let isStudent=true;
let subjects=["Java", "HTML", "CSS"];
let user={ city: "Mathura" };
let emptyValue=null;
let unknownValue;

// Create a list to display the data types
let data=[
    { label: "Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: subjects, type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "User", value: user, type: typeof user },
    { label: "Empty Value", value: emptyValue, type: "null" },
    { label: "Unknown Value", value: unknownValue, type: typeof unknownValue }
];

// Print the formatted report
console.table(data);