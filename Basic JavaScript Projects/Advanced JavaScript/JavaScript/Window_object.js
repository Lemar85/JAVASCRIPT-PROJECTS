//Using the window object to execute two JS commands that use Window Object Properties
//creating the screenLeft Window Object Property
let x = window.screenLeft;
let y = window.screenTop;
document.getElementById("Sleft").innerHTML = "Left: " + x + ", Top: " + y;

//creating name using the Window Object Property
window.name = "Lemar";
document.getElementById("Name2").innerHTML = window.name;

//Using the Window Object to execute two JS commands that use Window Object Methods
//creating the confirm() method using the window object
function Lyfe_function() {
    confirm("Press a button!")
}

//creating the prompt() method using the window object
function Jennings_function() {
    let person = prompt("Please enter your name", "Lemar Leach");
    if (person != null) {
        document.getElementById("Prompt").innerHTML = "Hello " + person + "! How are you today?";
    }
}