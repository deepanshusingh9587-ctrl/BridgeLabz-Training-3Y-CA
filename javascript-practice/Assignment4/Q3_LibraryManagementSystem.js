"use strict";

class Book{
    constructor(title,author,ISBN){
        this.title=title;
        this.author=author;
        this.ISBN=ISBN;
        this.isIssued=false;
    }

    issueBook(){
        if(this.isIssued){
            console.log(`${this.title} is already issued.`);
            return;
        }

        this.isIssued=true;
        console.log(`${this.title} has been issued.`);
    }

    returnBook(){
        if(!this.isIssued){
            console.log(`${this.title} was not issued.`);
            return;
        }

        this.isIssued=false;
        console.log(`${this.title} has been returned.`);
    }
}

const books=[
    new Book("The Alchemist", "Paulo Coelho", "101"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "102"),
    new Book("The Hobbit", "J. R. R. Tolkien", "103")
];

// Display books that are currently available
function showAvailableBooks(){
    console.log("\nAvailable books:");

    const availableBooks=books.filter(book => !book.isIssued);

    availableBooks.forEach(book =>{
        console.log(`${book.title} by ${book.author} | ISBN: ${book.ISBN}`);
    });
}

// Search for a book using its ISBN and issue it
function issueBookByISBN(isbn){
    const book=books.find(book => book.ISBN===isbn);

    if (!book){
        console.log("Book not found.");
        return;
    }

    book.issueBook();
}

showAvailableBooks();
issueBookByISBN("102");
showAvailableBooks();
