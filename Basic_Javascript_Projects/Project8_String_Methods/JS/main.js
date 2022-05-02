
//Defines 4 strings and concatenates them into 1 string
function concatenating() {
        var part1 = "This ";
        var part2 = "boy ";
        var part3 = "is ";
        var part4 = "COMBINED ";
        var combo = part1.concat(part2, part3, part4);
        document.getElementById("concatTest").innerHTML = combo;
}

//Slices a string that includes char 29 to char 32 and displays the sliced out string
function sliceMethod() {
        var targetToBeSliced = "Something seems to be wrong here. I may want to leave.";
        var slices = targetToBeSliced.slice(28,32);
        document.getElementById("slice").innerHTML = slices;
}

///MORE METHODS CHALLENGE 
//toUpperCase() method

//The toUpperCase() method is a method used on a string
//to make all of the applicable characters in it uppercase
//if they were not already.

var exampleStr = "this string is as tall as can be!";
//This function creates, stores, and displays an 
//uppercase version of the exampleStr variable
function upperTest() {
        var upper = exampleStr.toUpperCase();
        document.getElementById("upper").innerHTML = upper;
}

//search() method

//The search() method searches for the given string in the
//string the method was applied to. If the string is found,
//the index of the string will be given, and if not it will
//return the value -1

var exampleStr2 = "This string will be probed for a specific smaller string inside of it.";

//This function searches for the string in the larger, containing string
//and then slices the found string so that it can be displayed
function searchTest() {
        var wantedCriminal = "string";
        var criminalLocation = exampleStr2.search(wantedCriminal);
        var caughtCriminal = exampleStr2.slice(criminalLocation, criminalLocation + wantedCriminal.length)
        document.getElementById("search").innerHTML = caughtCriminal;
}

///METHOD CHALLENGE END

//Displays a number converted to a string
function numToString() {
        var testNum = 1001;
        document.getElementById("numToStr").innerHTML = testNum.toString();
}


function truncatingBot() {
        var roundyGuy = Number(document.getElementById("rounded").innerHTML);
        document.getElementById("rounded").innerHTML = roundyGuy.toPrecision(4).toString();
}

///NEW METHODS CHALLENGE
//toFixed() method

//The toFixed() method is applied to a number
//and returns a string of that number, and fixes 
//the number of decimal places to a given amount

let exampleNum = 3.14159265359

//This function displays the variable after converting to string and fixing its decimal places to 5
function exToFixed() {
        document.getElementById("numToStrFixed").innerHTML = exampleNum.toFixed(5);
}

//valueOf() method

//Returns the string value of a variable holding the string.
//Not necessary to put into code, but used in the background by JS

let exampleStr3 = "This string is held in a variable";

//Function shows that using valueOf() doesn't affect the text that is displayed
function ExValue() {
        document.getElementById("plainTxt").innerHTML = exampleStr3.valueOf();
}

///NEW METHODS CHALLENGE END

