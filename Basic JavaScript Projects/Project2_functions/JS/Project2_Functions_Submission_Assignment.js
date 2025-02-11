function myFunction() { //naming the function myFunction
    var sentence="In this assignment I will use a function with the += operator";
    sentence += " I will also create an HTML element that will call and display my function.";
    document.getElementById("concatenate").innerHTML=sentence;
}
//created a function that will take two halves of a sentence and display them as one full continuos sentence on screen

function blueText() { //named function "blueText"
    var sentence="All text in this paragraph";
    sentence += " should appear in blue";
    document.getElementById("colorblue").innerHTML=sentence; //used document.getElementById to call for colorblue element
}