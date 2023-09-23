const formDetail = document.getElementById("formDetail");

const amount            = document.getElementById("amount");
const selectDescription = document.getElementById("selectDescription");
const priceUnit         = document.getElementById("priceUnit");
const priceTotal        = document.getElementById("priceTotal");
const add               = document.getElementById("add");

const bodyTable         = document.getElementById("bodyTable");

let arrayDetail = [];

const redrawTable = () => {

    bodyTable.innerHTML = "";

    arrayDetail.forEach((detail, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${index}</td>
            <td>${detail.amount}</td>
            <td>${detail.selectDescription}</td>
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