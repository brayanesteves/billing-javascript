let barbacued_chicken = 20;
let sushi_12_rolls    = 6;
let barbacue          = 30;
let hambuguer         = 10;
document.getElementById("name").addEventListener("keyup", function() {
    document.getElementById("your_name").innerHTML = this.value;
});

document.getElementById("email").addEventListener("keyup", function() {
    document.getElementById("your_email").innerHTML = this.value;
});