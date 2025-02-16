function my_Dictionary() { //Named function my_Dictionary
    var Car = { //variable for function is Car
        Make:"Mazda",
        Model:"MAZDA3",
        Color:"Silver",
        Body_Type:"Sedan",
        Drivetrain:"Front-wheel Drive",
        Transmission:"Automatic"
    };
    delete Car.Color; //Deleted key "Color"
    document.getElementById("Dictionary").innerHTML=Car.Color; //Selected Color to display in browser as "undefined"
}