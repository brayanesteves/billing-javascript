const formDetail = document.getElementById("formDetail");

const amount            = document.getElementById("amount");
const selectDescription = document.getElementById("selectDescription");
const priceUnit         = document.getElementById("priceUnit");
const priceTotal        = document.getElementById("priceTotal");
const add               = document.getElementById("add");

const bodyTable         = document.getElementById("bodyTable");

let arrayDetail = [];

let arrayProducts = [
    { id:1, name:"Product 1", price:3.00, },
    { id:2, name:"Product 2", price:9.00, },
    { id:3, name:"Product 3", price:18.00, },
    { id:4, name:"Product 4", price:36.00, },
];

const fillProducts = () => {
    arrayProducts.forEach((product, index) => {
        const option     = document.createElement("option");
        option.value     = product.id;
        option.innerText = product.name;
        selectDescription.appendChild(option);
    });
};

fillProducts();

const getProductNameById = (id) => {

    const objectProduct = arrayProducts.find((product) => {
        
        if(product.id === parseInt(id)) {
            return product;
        }
    });
    console.log(objectProduct);
    return objectProduct.name;
};

const redrawTable = () => {

    bodyTable.innerHTML = "";

    arrayDetail.forEach((detail, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${index}</td>
            <td>${detail.amount}</td>
            <td>${getProductNameById(detail.selectDescription)}</td>
            <td>${detail.priceUnit}</td>
            <td>${detail.priceTotal}</td>
        `;
        let tdButtonDelete     = document.createElement("td");
        let buttonDelete       = document.createElement("button");
        buttonDelete.classList.add("btn", "btn-danger");
        buttonDelete.innerText = "Delete";
        tdButtonDelete.appendChild(buttonDelete);
        row.appendChild(tdButtonDelete);
        bodyTable.appendChild(row);
    });
};

formDetail.onsubmit = (e) => {
    e.preventDefault();

    // Creating detail object.
    const objectDetail = {
        amount:amount.value,
        selectDescription:selectDescription.value,
        priceUnit:priceUnit.value,
        priceTotal:priceTotal.value,
    };
    //console.log(objectDetail);
    arrayDetail.push(objectDetail);
    redrawTable();

}