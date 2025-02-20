//Creating a ternary operator
function Age_Function() { //naming the function Age_Function()
    var Age, Can_purchase; //creating a variable with a condition
    Age = document.getElementById("Age").value;
    Can_purchase = (Age < 21) ? "You are not old enough":"You are old enough"; //defining conditions to be displayed depending on what value is used
    document.getElementById("Alcohol").innerHTML = Can_purchase + " to purchase alcohol.";
}

//Creating a constructor function
function person(Haircolor, Age, Eyecolor) { //created a constructor function and named it person and the properties are some traits of a person
    this.person_Haircolor = Haircolor; //Using the keyword "this" to show what object is possesing the function
    this.person_Age = Age;
    this.person_Eyecolor = Eyecolor;
}
var Alex = new person("Brown", 23, "Hazel"); //assigned variables to take on the basic traits of the person function
var Justin = new person("Brown", 32, "Brown");
var Skylar = new person("Red", 24, "Blue");
function looks_Function() { //created a function to display the results of the following constructor function within and HTML element
    document.getElementById("Stats").innerHTML = "Alex is " + Alex.person_Age + " years old with " + Alex.person_Haircolor + " hair and " + Alex.person_Eyecolor + " eyes";
}

//creating a nested function
function count_Function() { //creating and naming function "count_Function"
    document.getElementById("Counting").innerHTML = Count(); //Connecting HTML code to JavaScript code using id "Counting"
    function Count() { //cretaing a new function "Count()"
        var Starting_point = 25; //starting variable at 25
        function Plus_five() {Starting_point += 5;} //created a nested function named "Plus_five"
        Plus_five(); //Using "Plus_five()" function to add 5 to Starting_point
        return Starting_point; //displays result 30 when clicked in HTML document
    }
}