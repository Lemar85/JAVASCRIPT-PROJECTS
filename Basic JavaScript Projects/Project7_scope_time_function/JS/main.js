//Creating a global variable
var X = 20; //giving variable X a value of 20
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

//Creating a local variable
function Add_numbers_3() {
    var Z = 15;
    document.write(20 + Z + "<br");
}
function Add_numbers_4() { //created a local variable
    console.log(Z + 100);
}
Add_numbers_3();
Add_numbers_4(); //displays in console log in Dev Tools that variable Z is not defined

//Writing a function with an if statement that utilizes the new Date().getHours() method
function j_Legend() {
    if (new Date().getHours() < 25) {
        document.getElementById("Tonight").innerHTML = "You are not eligible for VIP";
    }
}

if (5 < 25) {
    document.write("Your brain is not fully formed yet")
}

function Height_Function() {
    Height = document.getElementById("Height").value;
    if (Height >= 60) {
        Tall = "You are tall enough to skydiving!";
    }
    else {
        Tall = "You are not tall enough to go skydiving!";
    }
    document.getElementById("How_tall_are_you?").innerHTML = Tall;
}