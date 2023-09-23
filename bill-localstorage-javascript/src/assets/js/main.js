const formDetail = document.getElementById("formDetail");

const amount            = document.getElementById("amount");
const selectDescription = document.getElementById("selectDescription");
const priceUnit         = document.getElementById("priceUnit");
const priceTotal        = document.getElementById("priceTotal");
const add               = document.getElementById("add");

let arrayDetail = [];

formDetail.onsubmit = (e) => {
    e.preventDefault();

    // Creating detail object.
    const objectDetail = {
        amount:amount.value,
        selectDescription:selectDescription.value,
        priceUnit:priceUnit.value,
        priceTotal:priceTotal.value,
    };
    console.log(objectDetail);
    arrayDetail.push(objectDetail);
    
}