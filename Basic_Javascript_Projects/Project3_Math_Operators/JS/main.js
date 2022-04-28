//Adds the two numbers and displays the answer
function myAdd() {
        let answer = 3 + 9;
        document.getElementById("math").innerHTML = answer;
}

//Subtracts the two numbers and displays the answer
function mySubtract() {
        let answer = 9 - 3;
        document.getElementById("math2").innerHTML = answer;
}

//Multiplies the two numbers and displays the answer
function myMultiply() {
        let answer = 9 * 3;
        document.getElementById("math3").innerHTML = answer;
}

//Divides the two numbers and displays the answer
function myDivide() {
        let answer = 9 / 3;
        document.getElementById("math4").innerHTML = answer;
}

//Uses all four operations(ignoring standard order of operations) and displays the answer
function myBrokenMath() {
        let answer = (1 + 2) * 10 / 2 - 5;
        document.getElementById("math5").innerHTML = answer;
}

//Takes the modulus of 11 by 3 and displays the answer
function myModulus() {
        let answer = 11 % 3;
        document.getElementById("math6").innerHTML = answer;
}

//Negates the answer to the equation and displays it
function myNegative() {
        let answer = 9 / 3;
        document.getElementById("math7").innerHTML = -answer;
}

//Increments the stored number and displays the answer
function myIncrement() {
        let answer = 9;
        answer++;
        document.getElementById("math8").innerHTML = answer;
}

//Decrements the stored number and displays the answer
function myDecrement() {
        let answer = 9;
        answer--;
        document.getElementById("math9").innerHTML = answer;
}

//Finds a random number between 0 and 99, rounds it, and then adds 1. Then displays it
function myRandomInt() {
        let answer = Math.round(Math.random() * 100) + 1;
        document.getElementById("math10").innerHTML = answer;
}

//I went a little overboard with this one, but it basically comes in three stages.
function myDecider() {
        //Creating a random number from -99 to 99, then finding its sign
        let num1 = Math.round(Math.random()*-100 + Math.random()*100);
        var decide = Math.sign(num1);

        //Using conditionals to assign a string equivelant based on the sign of num1(which is being stored as decide)
        if (decide == 1) {
                decide = "Positive";
        }
        else if (decide == 0) {
                decide = "Null";
        }
        else if (decide == -1) {
                decide = "Negative";
        }

        //Inserting a concatenated string of the number, a space, and its sign into a paragraph element
        document.getElementById("outputBox").innerHTML = (String(num1) + "&nbsp;" + decide);
}