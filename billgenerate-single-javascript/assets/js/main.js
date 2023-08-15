let barbacued_chicken_price = 20, barbacued_chicken_quantity = 0, barbacued_chicken_show = "", barbacued_chicken_result = 0;
let sushi_12_rolls_price    =  6, sushi_12_rolls_quantity    = 0, sushi_12_rolls_show    = "", sushi_12_rolls_result    = 0;
let barbacue_price          = 30, barbacue_quantity          = 0, barbacue_show          = "", barbacue_result          = 0;
let hambuguer_price         = 10, hambuguer_quantity         = 0, hambuguer_show         = "", hambuguer_result         = 0;
let BillStatement           = "";

document.getElementById("name").addEventListener("keyup", function() {
    document.getElementById("your_name").innerHTML = this.value;
});

document.getElementById("email").addEventListener("keyup", function() {
    document.getElementById("your_email").innerHTML = this.value;
});

document.getElementById("barbacued_chicken").addEventListener("keyup", function() {
    if(this.value == "" || this.value == 0) {
        barbacued_chicken_show   = "";
        barbacued_chicken_result = 0;
        ShowBill();
    } else {        
        barbacued_chicken_quantity = this.value;
        barbacued_chicken_result   = barbacued_chicken_price * barbacued_chicken_quantity;
        barbacued_chicken_show     = `<tr><td>Barbecued chicken</td><td>${barbacued_chicken_price} USD</td><td>${barbacued_chicken_quantity}</td><td>${barbacued_chicken_price * barbacued_chicken_quantity} USD</td></tr>`;
        ShowBill();
    }
});

document.getElementById("sushi_12_rolls").addEventListener("keyup", function() {
    if(this.value == "" || this.value == 0) {
        sushi_12_rolls_show   = "";
        sushi_12_rolls_result = 0;
        ShowBill();
    } else {        
        sushi_12_rolls_quantity = this.value;
        sushi_12_rolls_result   = sushi_12_rolls_price * sushi_12_rolls_quantity;
        sushi_12_rolls_show     = `<tr><td>Sushi (12 Rolls)</td><td>${sushi_12_rolls_price} USD</td><td>${sushi_12_rolls_quantity}</td><td>${sushi_12_rolls_price * sushi_12_rolls_quantity} USD</td></tr>`;
        ShowBill();
    }    
});

document.getElementById("barbacue").addEventListener("keyup", function() {
    if(this.value == "" || this.value == 0) {
        barbacue_show   = "";
        barbacue_result = 0
        ShowBill();
    } else {        
        barbacue_quantity = this.value;
        barbacue_result   = barbacue_price * barbacue_quantity;
        barbacue_show     = `<tr><td>Barbacue</td><td>${barbacue_price} USD</td><td>${barbacue_quantity}</td><td>${barbacue_price * barbacue_quantity} USD</td></tr>`;
        ShowBill();
    }
});

document.getElementById("hambuguer").addEventListener("keyup", function() {
    if(this.value == "" || this.value == 0) {
        hambuguer_show   = "";
        hambuguer_result = 0
        ShowBill();
    } else {        
        hambuguer_quantity = this.value;
        hambuguer_result   = hambuguer_price * hambuguer_quantity;
        hambuguer_show     = `<tr><td>Hamburguer</td><td>${hambuguer_price} USD</td><td>${hambuguer_quantity}</td><td>${hambuguer_price * hambuguer_quantity} USD</td></tr>`;
        ShowBill();
    }
});

function ShowBill() {
    document.getElementById("BillStatement").innerHTML = barbacued_chicken_show + sushi_12_rolls_show + barbacue_show + hambuguer_show;
    document.getElementById("amount").innerHTML        = barbacued_chicken_result + sushi_12_rolls_result + barbacue_result + hambuguer_result;
}