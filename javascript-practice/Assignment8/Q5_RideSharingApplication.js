// User class
class User{
    constructor(name,rating){
        this.name=name;
        this.rating=rating;
    }
}

// Driver inherits from User
class Driver extends User{
    constructor(name,rating,vehicleDetails){
        super(name,rating);
        this.vehicleDetails=vehicleDetails;
    }
}

// Trip class
class Trip{
    constructor(fromLocation,toLocation,distance){
        this.fromLocation=fromLocation;
        this.toLocation=toLocation;
        this.distance=distance;
    }

    calculateFare(){
        if(this.distance===undefined ||
            this.distance===null ||
            this.distance<0 ||
            !Number.isFinite(this.distance)){
            throw new Error("Please provide a valid trip distance.");
        }

        // Fare is calculated at Rs. 10 per km
        return this.distance*10;
    }
}

// Create user, driver and trip
const user1=new User("Amit",4.5);
const driver1=new Driver("Rahul",4.8,"Swift Dzire");

console.log("User:",user1.name);
console.log("Driver:",driver1.name);
console.log("Vehicle:",driver1.vehicleDetails);

try{
    const trip1=new Trip("Mathura","Agra",60);

    console.log("From:",trip1.fromLocation);
    console.log("To:",trip1.toLocation);
    console.log("Fare: Rs.",trip1.calculateFare());

}catch (error){
    console.log("Trip Error:",error.message);
}

// Test invalid distance
try{
    const invalidTrip=new Trip("Mathura","Agra",-5);
    console.log(invalidTrip.calculateFare());
}catch (error){
    console.log("Trip Error:",error.message);
}
