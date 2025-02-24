function countdown() { //creating and naming function countdown function
    var seconds = document.getElementById("seconds").value; //creates a variable and defines the value as seconds

    function tick() { //creates a function called tick
        seconds = seconds - 1; //tells the function the interval in which to count down the numbers
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //tells the program to pause for 1,000 milliseconds (1 second)
        if (seconds == -1) { //tells program that timer ends if it reaches -1
            alert("Time's up!"); //creates an alert window that informs user that "Time's up!"
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 1; //tells the program what slide to start on
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) { //creates a function to keeps track of which slide is currently visible
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot"); //displays dot on image in HTML file to represent what image you are currently viewing
    if (n > slides.length) {slideIndex = 1} //creates an if statement that increments the slideIndex to move to the next slide, and when the end is reached, it loops back to the first slide.
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; //shows that current slide
    dots[slideIndex-1].className += " active";
}