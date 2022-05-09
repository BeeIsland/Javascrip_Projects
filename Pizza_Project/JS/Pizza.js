
//This function tallies the price and displays the items on the pizza
function getReceipt() {

        //This text holds the reciept, and is added onto throughout both functions
        var text1 = "<h3>You Ordered:</h3>";

        //Price of the pizza
        var runningTotal = 0;

        //Price of a size of pizza
        var sizeTotal = 0;

        //Pizza size options
        var sizeArray = document.getElementsByClassName("size");

        //Finds which pizza size option was selected
        for (var i = 0; i < sizeArray.length; i++) {
                if (sizeArray[i].checked) {
                        var selectedSize = sizeArray[i].value;
                        text1 = text1 + "<h5>" + selectedSize + "<h5>";
                }
        }

        //Adds price to the pizza based on its size
        if (selectedSize === "Pizza Cookies") {
                sizeTotal = 4;
        }
        else if (selectedSize === "Personal Pizza") {
                sizeTotal = 6;
        }
        else if (selectedSize === "Medium Pizza") {
                sizeTotal = 10;
        }
        else if (selectedSize === "Large Pizza") {
                sizeTotal = 14;
        }
        else if (selectedSize === "Monster Pizza") {
                sizeTotal = 20;
        }

        runningTotal = sizeTotal;

        //Documents current values in the console
        console.log(selectedSize + " = $" + sizeTotal + ".00");
        console.log("size text1: " + text1);
        console.log("subtotal:  $" + runningTotal + ".00");

        //Runs the next function and passes it the outputs of this one
        getTopping(runningTotal, text1);
}

//This function is similar to the getReceipt function except it focuses on toppings rather than pizza size
function getTopping(runningTotal, text1) {

        //Total price of toppings
        var toppingTotal = 0;

        //Array of which toppings were selected
        var selectedTopping = [];

        //Array of all toppings
        var toppingArray = document.getElementsByClassName("toppings");

        //Checks which toppings were selected
        for (var j = 0; j < toppingArray.length; j++) {
                if (toppingArray[j].checked) {
                        selectedTopping.push(toppingArray[j].value);
                        console.log("selected topping item: (" + toppingArray[j].value + ")");
                        text1 = text1 + "<h5>" + toppingArray[j].value + "<h5>";
                }
        }

        //Sets the first 2 toppings to be free
        var toppingCount = selectedTopping.length;
        if (toppingCount > 2) {
                toppingTotal = (toppingCount - 2);
        }
        else {
                toppingTotal = 0;
        }

        //Adds the topping price to the total price
        runningTotal = (runningTotal + toppingTotal);

        //Documents current state in the log
        console.log("total selected topping items: " + toppingCount);
        console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
        console.log("topping text1: " + text1);
        console.log("Purchase Total: $" + runningTotal + ".00");

        //Displays final price and toppings to the user
        document.getElementById("showText").innerHTML = text1;
        document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}


