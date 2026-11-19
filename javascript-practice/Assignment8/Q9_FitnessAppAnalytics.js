// Workout data of users
const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

// Fitness analytics class
class FitnessAnalytics{
    constructor(workoutData){
        this.workoutData=workoutData;
    }

    // Check whether data is available
    checkData(){
        if (this.workoutData.length===0){
            throw new Error("Workout dataset is empty.");
        }
    }

    // Get users having more than 7000 steps
    getActiveUsers(){
        this.checkData();

        return this.workoutData.filter(
            (person) => person.steps>7000
        );
    }

    // Calculate average calories using reduce()
    getAverageCalories(){
        this.checkData();

        const totalCalories=this.workoutData.reduce(
            (total, person) => total+person.calories,0
        );

        return totalCalories / this.workoutData.length;
    }

    // Create user summary using map()
    getUserSummary(){
        this.checkData();

        return this.workoutData.map((person) => {
            return `${person.user} completed ${person.steps} steps and burned ${person.calories} calories.`;
        });
    }
}

// Create analytics object
const fitnessApp=new FitnessAnalytics(workoutData);

// Execute all methods
try{
    console.log("Active Users:");
    console.log(fitnessApp.getActiveUsers());

    console.log("Average Calories:");
    console.log(fitnessApp.getAverageCalories());

    console.log("User Summary:");
    console.log(fitnessApp.getUserSummary());

}catch(error){
    console.log("Error:",error.message);
}

// Test empty dataset error
try{
    const emptyData=new FitnessAnalytics([]);
    emptyData.getActiveUsers();
}catch (error){
    console.log("Empty Data Error:",error.message);
}
