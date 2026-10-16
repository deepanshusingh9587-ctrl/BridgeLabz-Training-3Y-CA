// Store the total purchase amount
let total=7500;
let discountPercentage;

// Select the discount according to the purchase amount
if(total>=10000){
    discountPercentage=25;
}else if(total>=5000){
    discountPercentage=15;
}else if(total>=2000){
    discountPercentage=5;
}else{
    discountPercentage=0;
}

// Calculate discount and final price
let discountAmount=total*discountPercentage/100;
let finalPrice=Math.round(total-discountAmount);

// Display the bill
console.log(`Original Total: Rs. ${total}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Final Price After Discount: Rs. ${finalPrice}`);