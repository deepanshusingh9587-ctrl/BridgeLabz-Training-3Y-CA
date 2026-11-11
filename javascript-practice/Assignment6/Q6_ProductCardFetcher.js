"use strict";

// Fetch products from Fake Store API
async function fetchProducts() {
    try{
        const response=await fetch("https://fakestoreapi.com/products");

        // Check whether the API response is successful
        if(!response.ok){
            throw new Error("Unable to fetch products");
        }

        const products=await response.json();

        console.log("Fake Store - Product Dashboard");

        // Display required product details
        products.forEach((product) => {
            console.log("------------------------------");
            console.log("Product:",product.title);
            console.log("Price: $"+product.price);
            console.log("Image:",product.image);
        });

        // Bonus: create simple product cards in the browser
        if(typeof document!=="undefined"){
            products.forEach((product) => {
                const card=document.createElement("div");
                const title=document.createElement("h3");
                const price=document.createElement("p");
                const image=document.createElement("img");

                title.textContent=product.title;
                price.textContent="$"+product.price;

                image.src=product.image;
                image.alt=product.title;
                image.width=100;

                card.append(title,price,image);
                document.body.appendChild(card);
            });
        }

    }catch(error){
        console.log("Failed to load products. Please try again.");
        console.log("Error:", error.message);
    }
}

fetchProducts();
