
//Defines a global variable
var globality = 101;

//Displays a global variable
function globalTest() {
        document.getElementById("global").innerHTML = globality;
}

//Displays a local variable defined within itself
function localityTest() {
        //Local variable defined within a function
        var locality = 99;
        document.getElementById("local").innerHTML = locality;
}

//Tries to display a local variable defined in another function(and fails)
function localityTestFail() {
        document.getElementById("localFail").innerHTML = locality;
        //This displays an error log in the console
        console.log(locality);
}

//Uses a conditional to give different greetings based on time of day
function timeTest() {
        //Defines a var to store time values retrieved by the Date class
        let time = new Date();
        //Sets time of day
        // time.setHours(20);
        if (time.getHours() < 18) {
                document.getElementById("greetings").innerHTML = "Good day!";
        }
        else {
                document.getElementById("greetings").innerHTML = "Good night!"
        }
}

//Displays text to the console only if globality is larger than 100
if (globality > 100) {
        console.log("The globality variable is larger than 100!")
}

//Takes the age the user inputs and gives different 
//responses if they're older or younger than 25
function ageTester() {
        var age, price;
        age = document.getElementById("age").value;
        if (age >= 25) {
                price = "You will not be charged a car rental fee.";
        }
        else {
                price = "You will be charged a car rental fee.";
        }
        document.getElementById("howOld").innerHTML = price;
}

//Take the input from the user and tells them whether the 
//pizza is undercooked, perfectly cooked, or overcooked
function checkDoneness() {
        var time = document.getElementById("doneness").value;
        var response;
        if (time >= 0 && time <=15) {
                response = "The pizza is undercooked!";
        }
        else if (time > 15 && time <=30) {
                response = "The pizza is perfectly cooked!";
        }
        else {
                response = "The pizza is overcooked!";
        }
        document.getElementById("pizzaDone").innerHTML = response;
}