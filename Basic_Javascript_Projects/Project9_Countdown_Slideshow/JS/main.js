///TIMER
//This function takes input from the user and sets
//a timer of that length using the 'tick' function
function countdown() {
        var seconds = document.getElementById("seconds").value;

        //A nested function that iterates until the seconds variable hits 0
        function tick() {
                seconds--;
                document.getElementById("timer").innerHTML = seconds;
                var time = setTimeout(tick, 1000);
                if (seconds <= -1) {
                        alert("Time's Up!");
                        clearTimeout(time);
                        document.getElementById("timer").innerHTML = "";
                }
        }
        tick();
}

///SLIDESHOW

//Declare the starting slide and starts the code
let slideIndex = 1;
showSlides(slideIndex);


//This function changes the slide by the amount given
function plusSlides(n) {
        showSlides(slideIndex += n);
      }

//This function sets the slide to the number given
function currentSlide(n) {
        showSlides(slideIndex = n);
}

//This function displays the slide of the given number
function showSlides(n) {
        let i;

        //Generates arrays of the slides and dots in the HTML to fill them
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        //Rolls the slide over to the first one if the number 
        //to move to is larger than the available slides
        if (n > slides.length) {slideIndex = 1}

        //Rolls the slide to the last if the number 
        //to move to is smaller than 1
        if (n < 1) {slideIndex = slides.length}

        //Sets all slides to stop displaying
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        //Sets all dots to be inactive
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }

        //Sets the slide that was moved to and the 
        //associated dot to dislay and become active
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
}
      
