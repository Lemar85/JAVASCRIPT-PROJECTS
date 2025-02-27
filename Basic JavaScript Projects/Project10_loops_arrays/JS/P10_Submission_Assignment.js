//writing a function that utilizes a while loop
function five_count() { //create function named five_count
    var Digit = ""; //assigns variable Digit to be and interchangeable value
    var X = 1; //assigns variable X to equal 1
    while (X < 6) { //creates a while loop with an expression
        Digit += "<br>" + X;
        X++;    //every time while loop is run, add 1 to variable X until while loop is false
    }
    document.getElementById("fiver").innerHTML = Digit;
}

//writing a function that utilizes a for loop
var Sibling = ["Natachwa", "Derek", "Lemar", "Randy", "Devon"]; //creates variable "Sibling" with a list of strings for indexes 0-4
var Content = ""; //assigns variable "Content" to have an interchangeable value
var Y; //creates variable "Y"
function for_Loop() { //creates a function named "for_Loop"
    for (Y = 0; Y < Sibling.length; Y++) { //creates for loop to display the strings in order in browser
        Content += Sibling[Y] + "<br>";
    }
    document.getElementById("Family").innerHTML = Content;
}

//writing a funcion that utilizes an array
function family_pics() { //creates a function named family_pics
    var Family_Picture = []; //creates variable Family_Picture
    Family_Picture[0] = "serious"; //assigns index 0 in the array
    Family_Picture[1] = "silly"; //assigns index 1 in the array
    Family_Picture[2] = "playing"; //assigns index 2 in the array
    Family_Picture[3] = "parents"; //assigns index 3 in the array
    document.getElementById("Pics").innerHTML = "In this picture everyone is giving their " + Family_Picture[1] + " poses.";
}

//creating and object using the "let" keyword
let car = { //creates an object using the "let" keyword
    make: "Chevrolet ", //assigns the values of the properties "make, model, year and color"
    model: "Camaro ",
    year: "2016 ",
    color: "neon green ",
    description : function() { //creates a method to be performed on object car
        return "The car I want to buy in the future is a " + this.year + this.color + this.make + this.model; //displays a statement in browser
    }
};
document.getElementById("myCar").innerHTML = car.description();