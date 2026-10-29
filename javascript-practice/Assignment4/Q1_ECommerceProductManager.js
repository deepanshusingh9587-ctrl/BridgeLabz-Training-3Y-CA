"use strict";

class Product{
    constructor(id, name, price, category){
        this.id=id;
        this.name=name;
        this.price=price;
        this.category=category;
    }

    applyDiscount(percent){
        this.price=this.price-(this.price*percent/100);
    }

    getDetails(){
        return `ID:${this.id},Name:${this.name},Price:₹${this.price},Category:${this.category}`;
    }
}

// Create product objects
const products=[
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Headphones", 1500, "Electronics"),
    new Product(3, "Notebook", 100, "Stationery")
];

// Apply a 10% discount to the first product
products[0].applyDiscount(10);

console.log("All Products:");
products.forEach(product => console.log(product.getDetails()));

// Display products whose price is greater than 1000
const expensiveProducts=products.filter(product => product.price>1000);

console.log("\nProducts above ₹1000:");
expensiveProducts.forEach(product => console.log(product.getDetails()));

