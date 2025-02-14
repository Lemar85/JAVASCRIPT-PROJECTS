function addition_Function() { //created a function and named it addition_Function
    var addition = 1985 + 40; //Used my birth year plus my age to equal this year (2025)
    document.getElementById("Math").innerHTML="1985 + 40 = " + addition; //named the element Id "Math"
}

function subtraction_Function() { //created subtraction function
    var Subtraction = 5 - 2; //used subtraction function to take 2 away from 5
    document.getElementById("Math2").innerHTML = "2025 - 1985 = " + Subtraction; //named the element Id "Math2"
}

function multiplication() { //created multiplication function
    var simple_Math = 8 * 8; //used function to get the product of 8 x 8
    document.getElementById("Math3").innerHTML = "8 x 8 = " + simple_Math; //named the element Id "Math3"
}

function division() { //created division function
    var simple_Math = 8 / 8; //used function to divide 8 by 8
    document.getElementById("Math4").innerHTML = "8 / 8 = " + simple_Math; //named the element Id "Math4"
}

function more_Math() { //created more_Math function to showcase four different operators
    var simple_Math = 1 + 2 * 10 / 2 - 5; //wrote an equation using the four operators
    document.getElementById("Math5").innerHTML = "1 + 2 * 10 / 2 - 5 = " + simple_Math; //named element Id "Math5"
}

function modulus_Operator() { //created modulus function
    var simple_Math = 47 % 6; //used modulus fucntion to see the remainder after operation is performed
    document.getElementById("Math6").innerHTML = "47 % 6 = " + simple_Math; //named element Id "Math6"
}

function negation_Operator() { //created negation function
    var x = 40; //used my age as the variable to demonstrate negation function
    document.getElementById("Math7").innerHTML = -x; //named element ID "Math7"
}

var X = 40; //used my age as variable for increment operator
X++; //created increment operator using variable X
document.write(X);

var Y = 40; //used my ag as variable for decrement operator
Y--; //created decrement operator using variable Y
document.write(Y);

window.alert(Math.random()); //created a pop up window to display random number using Math.random function

window.alert(Math.random() * 50); //created a pop up window to display randome number between 0 and 50 using Math.random function