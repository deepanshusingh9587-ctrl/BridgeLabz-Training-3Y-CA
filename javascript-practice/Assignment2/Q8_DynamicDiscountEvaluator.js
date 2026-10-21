const cart=[
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total=0;

// Calculate the price after category discounts
for(let product of cart){
    let price=product.price;

    if(product.category==="electronics"){
        price=price-price*0.10;
    }else if(product.category==="fashion"){
        price=price-price*0.05;
    }

    total+=price;

    console.log(product.item,"Final Price:",price);
}

// Apply an extra discount if the original cart total exceeds 50000
let cartTotal=cart.reduce((sum,product) => sum+product.price,0);

if(cartTotal>50000){
    total=total-total*0.05;
}

console.log("Original Cart Total:",cartTotal);
console.log("Final Total After Discounts:",total.toFixed(2));
