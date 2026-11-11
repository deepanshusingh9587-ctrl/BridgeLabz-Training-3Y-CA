"use strict";

const productInput=document.getElementById("productInput");
const addButton=document.getElementById("addButton");
const productList=document.getElementById("productList");

// Add a new product to the list
addButton.addEventListener("click",function(){
    const productName=productInput.value.trim();

    if(productName===""){
        return;
    }

    const li=document.createElement("li");

    li.innerHTML = `
        <span>${productName}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;

    productList.appendChild(li);
    productInput.value = "";
});

// Event delegation handles Edit and Delete
productList.addEventListener("click",function(event){
    const item=event.target.closest("li");

    if(!item){
        return;
    }

    if(event.target.classList.contains("delete")){
        item.remove()
    }

    if(event.target.classList.contains("edit")){
        const text=item.querySelector("span");

        if(event.target.textContent==="Edit"){
            const input=document.createElement("input");
            input.value=text.textContent;

            item.replaceChild(input,text);
            event.target.textContent="Save";
            input.focus();
        }else{
            const input=item.querySelector("input");
            const newText=input.value.trim();

            if(newText!==""){
                const newSpan=document.createElement("span");
                newSpan.textContent=newText;

                item.replaceChild(newSpan,input);
                event.target.textContent="Edit";
            }
        }
    }
});