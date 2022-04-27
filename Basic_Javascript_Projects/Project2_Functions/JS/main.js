//This function Changes the text of the button that's calling it.
function myFirstFunction() {
        var bttnTxt = "This is the button text!";
        document.getElementById("buttonText").innerHTML = bttnTxt;
}

//This function concatenates the text and then changes the text of the calling HTML element.
function myFunction() {
        var sentence = "I am learning";
        sentence += " a lot from this book!";
        document.getElementById("concatenate").innerHTML = sentence;
}
