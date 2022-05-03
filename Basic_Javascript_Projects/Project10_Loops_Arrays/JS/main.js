

var speech = "Hello there, how are you doing today!";


//Continues looping until it runs out of letters.
//Adds the letters and breaks one at a time to display them vertically
function callLoop() {
        let breakStr = "";
        let i = 0;
        while (i < speech.length) {
                breakStr += "<br>" + speech[i];
                i++;
        }
        document.getElementById("loop").innerHTML = breakStr;
}


//Definition of the length property
//This property is the amount of characters
//in the string. It is very useful when interating
//or writing with contraints. ex. The speech variable
//has a length of 38

var instruments = ["Trumpet","Trombone","Saxaphone","Clarinet","Flute"];

//Indexes the array and adds the elements to a string with spacers
function callLoopFor() {
        let breakStr = "";
        for (i = 0; i < instruments.length ; i++) {
                breakStr += "&nbsp;&nbsp;&nbsp;&nbsp;" + instruments[i];
        }
        document.getElementById("loopFor").innerHTML = breakStr;
}

//Displays the array
var arrayEx = ["one","two","three","four","five","six","seven"];

function arrayFunc() {
        let arrayLs = "";
        for (i = 0; i < arrayEx.length; i++) {
                arrayLs += arrayEx[i] + "&nbsp;";
        }

        document.getElementById("array").innerHTML = arrayLs;
}

//Creates a dictionary using const rather than var 
//or let to make the resulting variable mostly immutable.
//The properties of exampleConst can be changed, but not
//the type(dictionary) or the name(exampleConst)
const exampleConst = {
        one:"1",
        two:"two",
        three:"three"
};

//Alters and displays exampleConst to show the parts that are and aren't immutable
function displayConst() {
        //Including this line causes an error from trying to reassign a constant
        // exampleConst = 4;
        exampleConst.three = "four";
        exampleConst.four = "YES";
        document.getElementById("constant").innerHTML = exampleConst.three + " " + exampleConst.four;
}

///RETURN CHALLENGE
//The return statement is a way to allow functions to have an output.
function gimmeText(txt) {
        return "TEXT" + " " + txt;
}

function displayText() {
        document.getElementById("returning").innerHTML = gimmeText("YEAH");
}

///END CHALLENGE

let city = {
        pop: 100000,
        nam: "Shmorgheshborg",
        loc: "Space",
        exp: function() {
                return "This city is " + this.nam + " in " + this.loc + " with " + this.pop + " people.";
        }
}

function dispCity() {
        document.getElementById("OBJECT").innerHTML = city.exp();
}


//Originally this code was meant for the break and continue challenge
//but I couldn't do what I wanted while using a while loop, so it's just
//going to stay as my experiment with timers.
var dispNum = 0;
var i = 0;

//This works as a timer because these functions calling each other
//is the only part that iterates, so the main function cannot continue or end
//until the timer is through and it calls back to the main function
function sleep() {
        const myTimeout = setTimeout(writeNum, 1000);

}

function writeNum() {
        document.getElementById("written").innerHTML = dispNum;
        dispNum += 1;
        if (i < 10) {
                i++;
                sleep();
        }       
}

///BREAK AND CONTINUE CHALLENGE
//The break statement exits a loop the moment it is called
//regardless of where in the loop the program is currently

//It's in a block to allow me to reuse the variables
{
        let comboStr = "";
        let i = 0;

        //This function displays the numbers 1-10 but breaks on 6, cutting off the rest
        function breakNum() {
                while (i < 10) {
                        if (i == 6) {
                                break;
                        }
                        i++;
                        comboStr += "<br>" + i;
                }
                document.getElementById("break").innerHTML = comboStr;
        }
}

//The continue statement is just as abrupt as the break statement
//but rather than exiting the loop entirely, the continue skips over
//the rest of the current iteration and starts the next one.

{
        let comboStr = "";
        let i = 0;

        //This function displays the numbers 1-10 but continues on 6, skipping it entirely
        function continueNum() {
                while (i < 10) {
                        i++;
                        if (i == 6) {
                                continue;
                        }
                        comboStr += "<br>" + i;
                }
                document.getElementById("continue").innerHTML = comboStr;
        }
}

///BREAK AND CONTINUE CHALLENGE END


