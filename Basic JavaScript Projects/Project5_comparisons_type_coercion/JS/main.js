document.write(typeof 9); //displays 'number' in browser

document.write(typeof "10" + 5); //displays 'string' in browser

document.write(2E567); //displays 'infinity' in browser

document.write(-2E800); //diplays '-infinity' in browser

//The following Boolean logic values will display either true or false in the browser

document.write(5 > 6); //false statement using Boolean

document.write(10 < 12); //true statement using Boolean

//Using the console.log method

console.log(1985 + 40); //performs math operation to display sum 2025 in console

console.log(40 > 1985); //using Boolean logic to display 'false' in console

//Using double equal signs to display true and false stements

document.write(5 == 6); //diplays 'false' in the browser

document.write((15 + 5) == 20); //displays 'true' in the browser

///Using triple equal signs

L = 93; //Assigns variable L as 93
R = 93; //Assigns variable R as 93
document.write(L === R); //Returns true statement by ensuring to match the data type and value

A = "Adriene"; //Assigns variable A as "Adriene"
B = "Bacon"; //Assigns variable B as "Bacon"
document.write(A === B); //Returns false by writing a different data type and different value

E = "Twenty-four"; //Assigns variable E as "Twenty-four"
O = 24; //Assigns variable O as 24
document.write(E === O); //Returns false by writing a different data type but the same value for both

N = "Naomi"; //Assigns variable N as "Naomi"
Y = "Yanik"; //Assigns variable Y as "Yanik"
document.write(N === Y); //Returns false by writing the same data type but a different value for both.

//Using the AND operator

document.write(10 > 5 && 10 < 20); //using the AND operator to display a true statement in browser
document.write(4 > 8 && 7 < 9); //using the AND operator to display a false satement in browser

//Using the OR operator

document.write(9 < 10 || 11 > 20); //Using the OR operator to display a true statement in browser
document.write(7 > 30 || 4 < 2); //Using the OR operator to display false in browser

//Using the NOT(!) operator

function not_Function() { //created a new function... not_Function
    document.getElementById("Not").innerHTML = !(45 > 55); //using the NOT operator to display a true statement in browser
}

function not_Function2() { //created a new function... not_Function2
    document.getElementById("Not1").innerHTML = !(45 < 55); //using the NOT operator to display a false statement in browser
}