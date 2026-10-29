"use strict";

const bookingForm=document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event){
    event.preventDefault();

    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const seats=Number(document.getElementById("seats").value);
    const message=document.getElementById("message");
    const ticket=document.getElementById("ticket");

    const validName=/^[A-Za-z ]+$/.test(name);
    const validEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validSeats=Number.isInteger(seats)&&seats>=1&&seats<=10;

    if(!validName||!validEmail||!validSeats){
        message.style.color="red";
        message.textContent="Enter a valid name, email and seat count (1-10).";
        ticket.textContent="";
        return;
    }

    // Save booking details in an object after successful validation
    const booking = { name, email, seats };

    message.style.color="green";
    message.textContent="Booking successful!";
    ticket.textContent=
        `Movie Ticket Details\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
});
