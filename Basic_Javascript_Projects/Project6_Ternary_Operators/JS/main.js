
//This function takes input from a HTML input tag and uses a ternary operator 
//to display text about the answer they gave
function rideFunction() {
        var Height, canRide;
        Height = document.getElementById("Height").value;
        canRide = (Height < 52) ? "You are too short":"You are tall enough";
        document.getElementById("Ride").innerHTML = canRide + " to ride."; 
}

//This function takes the number input and tests if it's higher than 18
function canVote() {
        let age, eligible;
        age = document.getElementById("age").value;
        eligible = (age >= 18) ? "":"not ";
        document.getElementById("voting").innerHTML = "You are " + eligible + "old enough to vote.";
}

//This is a class constructor for a 'Vehicle'
function Vehicle(Make, Model, Year, Color) {
        this.Make = Make;
        this.Model = Model;
        this.Year = Year;
        this.Color = Color;
}

//These are instances of the class 'Vehicle'
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//This function outputs info on the instances of the 'Vehicle' class
function carFunction() {
        document.getElementById("constructors").innerHTML = 
        "Erik drives a " + Erik.Color + "-colored " + Erik.Model +
        " manufactured in " + Erik.Year + ".";
}

//This is a class constructor for a 'Bike'
function Bike(Color, Style, Weight) {
        this.Color = Color;
        this.Style = Style;
        this.Weight = Weight;
}

//This is an instance of the class 'Bike'
var Steven = new Bike("Grey", "Mountain", 20);

//This displays the info on the variable 'Steven' of class 'Bike'
function buttonDisp() {
        document.getElementById("newAndThis").innerHTML = "Steven has a " + Steven.Color + " " + Steven.Style + " bike.";
}

//This code is broken so I commented it out, but it's my example of reserved variables

// var new = "no";

// function reserve(new) {
//         this.this = "yes";
//         this.true = "maybe";
//         this.new = new;
// }

// var tester = new reserve();

// function reservedWord() {
//         document.getElementById("reservations").innerHTML = tester.new;
// }

//This functions has a nested function in it that it used to multiply and display the answer
function nestingTest() {
        var X = 10;
        var Y = 3;
        function multiply(a, b) {
                return a * b
        }
        var answer = multiply(X,Y);
        document.getElementById("nestedFunction").innerHTML = answer;
}

//
