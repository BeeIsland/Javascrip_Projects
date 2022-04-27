window.alert("Hello World!");//Displays the text 'Hello World!' in an alert box

document.write("Hello World<br>");//Displays the text 'Hello World!' on the page

var A = "This is a string<br>";//Stores the string in a variable
document.write(A);//Displays the variable A

var B = "This string has <br>a \" and a \< br \> in it <br>";//Stores the string in the variable B. The string has escape characters in it
document.write(B);//Displays the variable B

var C = "This string" + " is broken up" + " into pieces, " + "y\'know, for fun<br>";//Concatenates the strings and stores them in the var C
document.write(C);//Displays the var C

var D = "Yes", E = "No"
        F = "Maybe";//Stores strings in 3 different variables
document.write(E + "<br>");//Diplays the var E after concatenating with a break tag

G = 3 + 3;//Stores the result of the equation in the var G
document.write(String(G));//Converts var G(which is an int) to a string and displays it