//Assigning a local variable
function multiply_numbers_1() { //naming function multiply_numbers_1
    var X = 10; //assigning variable X as 10
    document.write(20 * X + "<br>"); //using the (*) operator to multiply 20 and X
}
function multiply_numbers_2() { //naming function multiply_numbers_2
    var X = 10; //Assigning variable X as 10
    document.write(X * 50 + "<br>"); //using the (*) operator to multiply X by 50
}
multiply_numbers_1(); //displays 200 in browser
multiply_numbers_2(); //displays 500 in browser

//Assigning a global variable
var Y = 20; //Assigned variable Y to equal 20
function divide_numbers_1() { //naming function divide_numbers_1
    document.write(40 / Y + "<br>"); //created an expression using the (/) operator
}
function divide_numbers_2() { //naming function divide_numbers_2
    document.write(Y / 2 + "<br>"); //created an expression using the (/) operator
}
divide_numbers_1(); //displays 2 in browser
divide_numbers_2(); //displays 10 in browser

//Assigning local variable using console.log
function subtract_numbers_1() { //naming function subtract_numbers_1
    var Z = 20; //assigned variable Z as 20
    console.log(40 - Z); //created an expression using the (-) operator
}
function subtract_numbers_2() { //naming function subtract_numbers_2
    console.log(Z - 5); //created an expression using the (-) operator
}
subtract_numbers_1(); //displays 20 in the console tab in Dev Tools
subtract_numbers_2(); //displays error Z is not defined in console tab in Dev Tools

//Creating an if statement
function jack_function() {
    if (new Date().getHours() < 23) {
        document.getElementById("Correct").innerHTML = "I did this step correct!";
    }
}

//Write the Time_function()
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}