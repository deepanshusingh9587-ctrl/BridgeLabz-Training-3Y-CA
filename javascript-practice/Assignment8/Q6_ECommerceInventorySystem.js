// Product data
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Accessories", price: 500, stock: 3 },
    { id: 3, name: "Mobile", category: "Electronics", price: 20000, stock: 15 },
    { id: 4, name: "Keyboard", category: "Accessories", price: 1000, stock: 8 },
    { id: 5, name: "Chair", category: "Furniture", price: 3000, stock: 2 }
];

// Get products having low stock using filter()
function getLowStockProducts(){
    return products.filter((product) => product.stock<5);
}

// Sort products by price using sort()
function sortProductsByPrice(){
    return [...products].sort((a,b) => a.price-b.price);
}

// Calculate total inventory value using reduce()
function calculateTotalInventoryValue(){
    return products.reduce((total, product) => {
        return total+(product.price*product.stock);
    }, 0);
}

// Group products by category using reduce()
function groupByCategory(){
    return products.reduce((groups, product) => {
        const category=product.category;

        if(!groups[category]){
            groups[category]=[];
        }

        groups[category].push(product);
        return groups;
    }, {});
}

// Test all functions
console.log("Low Stock Products:");
console.log(getLowStockProducts());

console.log("Products Sorted By Price:");
console.log(sortProductsByPrice());

console.log("Total Inventory Value:");
console.log(calculateTotalInventoryValue());

console.log("Products Grouped By Category:");
console.log(groupByCategory());
