//This function takes a string input and uses the 
//switch statement to give a custom response
function colorFunction() {
        var output;
        var colorInput = document.getElementById("colorInput").value;
        var outputString = " is a nice color!";

        switch(colorInput.toLowerCase()) {
                case "red":
                        output = "Red" + outputString;
                break;
                case "orange":
                        output = "Orange" + outputString;
                break;
                case "yellow":
                        output = "Yellow" + outputString;
                break;
                case "green":
                        output = "Green" + outputString;
                break;
                case "blue":
                        output = "Blue" + outputString;
                break;
                case "purple":
                        output = "Purple" + outputString;
                break;
                case "pink":
                        output = "Pink" + outputString;
                break;
                default:
                        output = "Please enter a color in the list. Check your spelling.";
        }

        document.getElementById("output").innerHTML = output;
}

//Demonstrates the getElementsByClassName method
function alteringStr() {
        stringArray = document.getElementsByClassName("classCall");
        stringArray[0].innerHTML = "This string changed!";
        document.getElementsByClassName("classCall") = stringArray;
}

///CANVAS
function drawing() {
        var canvas = document.getElementById("drawingPlate");
        var pointer = canvas.getContext("2d");
        pointer.font = "80px comic sans ms";
        pointer.lineWidth = 3;
        
        var gradient = pointer.createLinearGradient(0,0,200,100);
        gradient.addColorStop(0,"pink");
        gradient.addColorStop(0.16,"purple");
        gradient.addColorStop(0.32,"blue");
        gradient.addColorStop(0.48,"green");
        gradient.addColorStop(0.64,"yellow");
        gradient.addColorStop(0.80,"orange");
        gradient.addColorStop(1,"red");
        
        pointer.strokeStyle = gradient;
        pointer.strokeText("bean", 10, 125);
}
//GRADIENT COLOR CHALLENGE
//The create linear gradient defines a space and angle for the gradient to draw with,
//while the addColorStop methods define which sections of the gradient will be what color