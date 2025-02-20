function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Constructor Function for Person objects
function Person(first, last, age, eye) {
    this.Person_firstName = first;
    this.Person_lastName = last;
    this.Person_age = age;
    this.Person_eyeColor = eye;
}
var Alex = new Person("Alex", "Baker", 23, "grey");
var Justin = new Person("Justin", "Gerace", 32, "brown");
var Tyler = new Person("Tyler", "Eighmey", 37, "brown");
function myPerson() {
    document.getElementById("New_and_This").innerHTML = "Alex is a " + Alex.Person_age + " male with " + Alex.Person_eyeColor + " eyes and plays volleyball";
}

//creating a function with a nested function
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 25;
        function Plus_ten() {Starting_point += 10;}
        Plus_ten();
        return Starting_point;
    }
}