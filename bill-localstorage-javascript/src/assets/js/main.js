const formDetail = document.getElementById("formDetail");

/*<DATA: CLIENT>*/
const socialReason     = document.getElementById("socialReason");
const identifyDocument = document.getElementById("identifyDocument");
const number           = document.getElementById("number");
const address          = document.getElementById("address");
const date             = document.getElementById("date");
const formCustomer     = document.getElementById("formCustomer");
/*<.DATA: CLIENT>*/

/*<DATA: PRODUCT>*/
const amount            = document.getElementById("amount");
const selectDescription = document.getElementById("selectDescription");
const priceUnit         = document.getElementById("priceUnit");
const priceTotal        = document.getElementById("priceTotal");
const add               = document.getElementById("add");
/*<.DATA: PRODUCT>*/

const bodyTable         = document.getElementById("bodyTable");

const saveBill          = document.getElementById("saveBill");

let invoice     = [];
let arrayDetail = [];

let arrayProducts = [
    { id:1, name:"Product 1", price:3.00, },
    { id:2, name:"Product 2", price:9.00, },
    { id:3, name:"Product 3", price:18.00, },
    { id:4, name:"Product 4", price:36.00, },
];

const checkInvoicesLocalStorage = () => {
    const invoicesLocalStorage = JSON.parse(localStorage.getItem("invoices"));
    //if(invoicesLocalStorage) {
    //    invoice                    = invoicesLocalStorage;
    //}
    // Step 2.
    invoice                    = invoicesLocalStorage || [];
};

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
    // console.log(objectProduct);
    return objectProduct.name;
};

const getProductPriceUnitById = (id) => {

    const objectProduct = arrayProducts.find((product) => {
        
        if(product.id === parseInt(id)) {
            return product;
        }
    });
    // console.log(objectProduct);
    return objectProduct.price;
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

        buttonDelete.onclick = () => {
            // console.log(detail);
            deleteDetailById(detail.selectDescription);
        };

        tdButtonDelete.appendChild(buttonDelete);
        row.appendChild(tdButtonDelete);
        bodyTable.appendChild(row);
    });
};

const deleteDetailById = (id) => {
    arrayDetail = arrayDetail.filter((detail) => {
        if(parseInt(id) !== parseInt(detail.selectDescription)) {
            return detail;
        }
    });
    redrawTable();
};

const addDetail = (objectDetail) => {
    // Search if in the object, exists in 'arrayDetail'.
    // If so, add the amounts, I only appear in the arrangement.

    // console.log(objectDetail);

    const result = arrayDetail.find((detail) => {
        if(parseInt(objectDetail.selectDescription) === parseInt(detail.selectDescription)) {
            return detail;
        }
    });
    if(result) {
        arrayDetail = arrayDetail.map((detail) => {
            if(parseInt(detail.selectDescription) === parseInt(objectDetail.selectDescription)) {
                // Map object.
                return {
                               amount: parseInt(detail.amount) + parseInt(objectDetail.amount),
                    selectDescription: detail.selectDescription,
                           priceTotal: parseFloat(parseInt(detail.amount) + parseInt(objectDetail.amount)) * parseFloat(objectDetail.priceUnit),
                           priceUnit: parseFloat(objectDetail.priceUnit),
                };
            }
            return detail;
        });
    } else {
        arrayDetail.push(objectDetail);
    }
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
    // console.log(objectDetail);
    addDetail(objectDetail);
    redrawTable();
}

saveBill.onclick = () => {
    // Create the invoice header object.
    let objectInvoice = {
            socialReason:socialReason.value,
                 address:address.value,
                    date:date.value,
                  number:number.value,
        identifyDocument:identifyDocument.value,
                  detail:arrayDetail,
    };
    // console.log(objectInvoice);

    invoice.push(objectInvoice);

    // Clean fields.
    formCustomer.reset();
    formDetail.reset();

    // Clean table 'tbody'.
    arrayDetail = [];
    
    // Save in the 'LocalStorage'.
    localStorage.setItem('invoices', JSON.stringify(invoice));
};

selectDescription.onchange = () => {
    if(selectDescription.value === '0') {
        formDetail.reset();
        return;
    }
    const price = getProductPriceUnitById(selectDescription.value);
    if(price) {
        priceUnit.value  = price;
        if(parseInt(amount.value) > 0) {
            priceTotal.value = parseFloat(amount.value) * parseFloat(price);
            calculateTotal();
        } else {
            amount.value     = 0;
            priceTotal.value = 0.00;
            calculateTotal();
        }
    }
};

const calculateTotal = () => {
    const amountAux    = amount.value;
    const priceUnitAux = priceUnit.value;
    const total        = parseFloat(amountAux) * parseFloat(priceUnitAux);
    priceTotal.value   = total.toFixed(2);
};

amount.onkeyup = () => {
    calculateTotal();
};

amount.onchange = () => {
    calculateTotal();
};