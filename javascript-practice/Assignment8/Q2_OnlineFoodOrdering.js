// Calculate total bill of ordered food items
function calculateBill(orderItems){
    try{
        // Check whether order contains items
        if(!Array.isArray(orderItems) || orderItems.length===0){
            throw new Error("Order list is empty or invalid.");
        }

        // Get price of each food item using map()
        const priceList=orderItems.map((item) => {
            if(!item || typeof item.price !== "number" ||
                !Number.isFinite(item.price) || item.price<0){
                throw new Error("Invalid food item or price found.");
            }

            return item.price;
        });

        // Calculate total using reduce()
        const totalBill=priceList.reduce(
            (total, price) => total+price,0
        );

        console.log("Price List:", priceList);
        console.log("Total Bill: Rs.", totalBill);

    }catch(error){
        console.log("Unable to calculate bill:",error.message);
    }
}

// Food order
const orderItems = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Cold Drink", price: 50 }
];

calculateBill(orderItems);

// Test invalid order item
// calculateBill([{ name: "Pizza", price: 250 }, null]);
