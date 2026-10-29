"use strict";

class FormBuilder{
    constructor(fields,formId){
        this.fields=fields;
        this.form=document.getElementById(formId);
    }

    createForm(){
        // Create form controls from the supplied field descriptions
        this.form.innerHTML=this.fields.map(field => `
            <label for="${field.name}">${field.label}</label>
            <input type="${field.type}" id="${field.name}"
                   name="${field.name}" required>
            <br><br>
        `).join("") + '<button type="submit">Submit</button>';

        this.form.addEventListener("submit", event => {
            event.preventDefault();

            const formData=this.getFormData();
            document.getElementById("result").textContent=
                JSON.stringify(formData, null, 2);
        });
    }

    getFormData(){
        const data={};

        this.fields.forEach(field =>{
            data[field.name]=this.form.elements[field.name].value;
        });

        return data;
    }
}

const fields=[
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" }
];

const formBuilder=new FormBuilder(fields, "dynamicForm");
formBuilder.createForm();
