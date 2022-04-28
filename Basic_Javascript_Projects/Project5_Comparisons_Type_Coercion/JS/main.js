
//Blank function to test the 'typeof' statement
function test() {
        var num = 10;
}

//Displays the type of 'test'
document.write(typeof test);

//Displays example of type coercion
document.write("<br>hell" + 0);

//Displays NaN
document.write("<br>" + 0/0);

//Tests if 'Number' is a number or not and displays result
document.write("<br>" + isNaN("Number"));

//Tests if 3 is a number or not and displays result
document.write("<br>" + isNaN(3));

//Displays a number so large that computer considers it infinity
function Inf() {
        document.getElementById("infDisplay").innerHTML = 2E5000;
}

//Displays a number so far negative that computer considers it -infinity
function NegInf() {
        document.getElementById("negInfDisplay").innerHTML = -2E5000;
}

//Uses a greater than(>) to evaluate and display true
document.write("<br><br>" + (101 > 99));

//Uses a less than(<) to evaluate and display false
document.write("<br>" + (101 < 99));

//Displays the number in the Console
console.log(10+5);

//Displays the boolean in the Console
console.log(10>5);

//Uses a '==' to evaluate and display false
document.write("<br><br>" + (101 == 99));

//Uses a '==' to evaluate and display true
document.write("<br>" + (99 == 99));

//Uses a '===' to evaluate and display true
document.write("<br><br>" + (100 === 100));

//Uses a '===' to evaluate and display false
document.write("<br>" + (100 === "10"));

//Uses a '===' to evaluate and display false
document.write("<br>" + (100 === "100"));

//Uses a '===' to evaluate and display false
document.write("<br>" + (100 === 10));

//Uses a '&&' to evaluate and display true
document.write("<br><br>" + ((100 == 100) && (10 > 3)));

//Uses a '&&' to evaluate and display false
document.write("<br>" + ((100 == 100) && (10 < 3)));

//Uses a '||' to evaluate and display true
document.write("<br><br>" + ((100 == 100) || (10 < 3)));

//Uses a '||' to evaluate and display false
document.write("<br>" + ((100 == 101) || (10 < 3)));

//Uses a '!' to evaluate and sends false to a paragraph element
function Not() {
        document.getElementById("not").innerHTML = !(100 == 100);
}

//Uses a '!' to evaluate and sends true to a paragraph element
function NotNot() {
        document.getElementById("notnot").innerHTML = !(99 == 100);
}