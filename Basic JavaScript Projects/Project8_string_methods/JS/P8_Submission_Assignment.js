function j_Legend() { //creates a function and names is j_Legend() using the concat() method
    var part_1 = "Maybe it's me "; //creates a variable using part of a sentence
    var part_2 = "maybe I bore you ";
    var part_3 = "no no it's my fault ";
    var part_4 = "cause I can't afford you.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //creates a variable that pulls all 4 parts of a sentence together
    document.getElementById("Legend").innerHTML = whole_sentence; //utilizes the getElementById to connect JS code to HTML code
}

function j_Legend2() { //creates a function and names it j_Legend2() using the slice() method
    var Sentence = "Baby when I used to love you, there's nothing that I wouldn't do"; //creates a variable using a string
    var Section = Sentence.slice(12,28); //indicates which characters will be cut out and displayed
    document.getElementById("Legend2").innerHTML = Section; //connects JS code to HTML file
}

function j_Legend3() { //creates a function and names it j_Legend3() using the toString() method
    var X = 2003; //assigns a variable as the number 2003
    document.getElementById("Legend3").innerHTML = X.toString(); //makes the number 2003 into a string
}

function j_Legend4() { //creates a function and names is j_Legend4()
    var Y = 889392.001204; //assigns a number to variable Y
    document.getElementById("Legend4").innerHTML = Y.toPrecision(8); //displays 889392.00 using the toPrecision() method with 8 digits
}