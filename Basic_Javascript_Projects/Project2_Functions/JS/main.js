//This function Changes the text of the button that it has the ID for.
function myFirstFunction() {
        var bttnTxt = "This is the button text!";
        document.getElementById("buttonText").innerHTML = bttnTxt;
}

//This function concatenates the text and then changes the text of the 'concatenate' HTML element to it.
function myFunction() {
        var sentence = "I am learning";
        sentence += " a lot from this book!";
        document.getElementById("concatenate").innerHTML = sentence;
}
