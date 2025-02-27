function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//creating and using the string length property
function length_property() {
    var text = "Lemar Leach";
    var length = text.length;
    document.getElementById("length").innerHTML = length;
}

//Creating a loop with an array of instuments
var Instruments = ["Guitar", "Drums", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Creating a function with the document.getElementById().innerHTML method to display a value (or values) of an array
function array_Function() {
    var my_Anime = [];
    my_Anime[0] = "Tenjho Tenge";
    my_Anime[1] = "Peacemaker";
    my_Anime[2] = "Haikkyu";
    my_Anime[3] = "Getbackers";
    document.getElementById("Array").innerHTML = "Out of all of the anime that I own my favorite series is " + my_Anime[3] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//using the let keyword to display 3 values of the same variable
var X = 85
document.write("<br>" + X);
{
    let X = 19;
    document.write("<br>" + X);
}
document.write("<br>" + X);

//using a return statement
function add_Function() {
    return 5 + 3;
}

document.getElementById("Add").innerHTML = add_Function();

//creating an object using the let keyword including properties and a method
let car = {
    make: "Chevrolet ",
    model: "Camaro ",
    year: "2016 ",
    color: "blue ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

//utilizing the break statement
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {break}
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

//utilizing the continue statement
let demo = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {continue}
    demo += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = demo;