// Product constructor function
function Product(name,price){
    this.name=name;
    this.price=price;
}

// Add discount method using prototype
Product.prototype.applyDiscount=function(percent){
    if(percent<0 || percent>100){
        throw new Error("Discount must be between 0 and 100.");
    }

    const discountAmount=(this.price*percent)/100;
    return this.price-discountAmount;
};

// Create three products
const product1=new Product("Laptop",50000);
const product2=new Product("Mobile",20000);
const product3=new Product("Headphones",3000);

// Apply different discounts
console.log(product1.name,"Final Price:",product1.applyDiscount(10));
console.log(product2.name,"Final Price:",product2.applyDiscount(15));
console.log(product3.name,"Final Price:",product3.applyDiscount(20));
