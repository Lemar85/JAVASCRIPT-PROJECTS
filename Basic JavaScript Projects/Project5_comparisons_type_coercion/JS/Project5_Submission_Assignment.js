document.write(typeof "Love"); //utlizing the document.write() method and typeof operator to display string data type

document.write("male" + 40); //wrote and expression combining a string and a number

//Creating a fucntion to use the NOT(!) operator
function not_Function() { //created function named 'not_Function'
    document.getElementById("Not").innerHTML = !(55 < 40); //Used not operator to display true in browser
}

//Using the OR operator
document.write(9 > 10 || 10 < 11); //Created an OR statement to display true statement in browser

//Using the AND operator
document.write(5 < 6 && 8 > 4); //Created an AND statement to display true statement in browser

//Using the double equal signs
document.write(3 == 10); //Using the double equal signs to create a false statement

//Using the triple equal signs
A = "Alessandro" //assigned variable A as Alessandro
B = "Baker" //assigned variable B as Baker
document.write(A === B); //Using the triple equal signs to create a false statement to display in browswer