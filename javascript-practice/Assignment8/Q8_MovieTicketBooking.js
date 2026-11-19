// Parent class
class MovieTicket {
    constructor(movieName,seatNo,price){
        this.movieName=movieName;
        this.seatNo=seatNo;
        this.price=price;
    }
}

// Add method to parent prototype
MovieTicket.prototype.printTicket=function(){
    console.log("Movie:", this.movieName);
    console.log("Seat Number:", this.seatNo);
    console.log("Ticket Price: Rs.", this.price);
};

// Child class inherits MovieTicket
class OnlineTicket extends MovieTicket{
    constructor(movieName,seatNo,price,convenienceFee){
        super(movieName,seatNo,price);
        this.convenienceFee=convenienceFee;
    }

    // Calculate total ticket amount
    getTotalAmount(){
        return this.price+this.convenienceFee;
    }
}

// Create online ticket objects
const ticket1=new OnlineTicket("Pushpa 2","A10",200,30);
const ticket2=new OnlineTicket("Jawan","B12",250,40);

// Print ticket details using inherited prototype method
ticket1.printTicket();
console.log("Convenience Fee: Rs.", ticket1.convenienceFee);
console.log("Total Amount: Rs.", ticket1.getTotalAmount());

console.log("----------------------");

ticket2.printTicket();
console.log("Convenience Fee: Rs.", ticket2.convenienceFee);
console.log("Total Amount: Rs.", ticket2.getTotalAmount());

// Demonstrate prototype chain
console.log(
    "Prototype chain working:",
    ticket1 instanceof MovieTicket
);
