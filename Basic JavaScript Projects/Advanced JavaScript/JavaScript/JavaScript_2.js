function validateForm() {
    let x = document.forms["myForm"]["First_name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}