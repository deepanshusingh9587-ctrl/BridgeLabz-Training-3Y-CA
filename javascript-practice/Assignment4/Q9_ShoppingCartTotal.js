"use strict";

class Cart{
    constructor(){
        this.items=[];
    }

    addItem(name,price,quantity){
        this.items.push({name,price,quantity });
    }

    getTotal(){
        return this.items.reduce((total,item) => {
            return total+item.price*item.quantity;
        },0);
    }

    applyCoupon(coupon){
        // Coupon format: SAVE20 or DISC10
        const match=/^(SAVE|DISC)(\d{1,2})$/.exec(coupon);

        if(!match){
            throw new Error("Invalid coupon. Use a format like SAVE20 or DISC10.");
        }

        const discountPercent=Number(match[2]);

        if(discountPercent<1||discountPercent>100){
            throw new Error("Coupon discount must be between 1% and 100%.");
        }

        const total=this.getTotal();
        const discount=total*discountPercent/100;

        return{
            total: total,
            discount: discount,
            finalTotal: total-discount
        };
    }
}

const cart=new Cart();

cart.addItem("Laptop",50000,1);
cart.addItem("Mouse",500,2);
cart.addItem("Keyboard",1500,1);

console.log("Cart Items:",cart.items);
console.log("Total before discount: ₹"+cart.getTotal());

try{
    const result=cart.applyCoupon("SAVE20");

    console.log("Discount: ₹"+result.discount);
    console.log("Final Total: ₹"+result.finalTotal);
} catch (error){
    console.log("Error:",error.message);
}
