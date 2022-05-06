//Stores the calculators values
const Calculator = {
        displayValue: '0',
        firstOperand: null,
        waitSecondOperand: false,
        operator: null
}

//Adds the pressed digit to the calculator, either concatenating if an operator wasn't pressed last, or replacing the display if it was.
function inputDigit(digit) {

        //Pulls the properties from Calculator and declares them for use in this function
        const {displayValue, waitSecondOperand} = Calculator;

        //Rewrites the display with the pressed digit if the last button pressed was an operator
        if (waitSecondOperand === true) {
                Calculator.displayValue = digit;
                Calculator.waitSecondOperand = false;
        }

        //Concatenates the pressed digit to the display unless the display is a a 0, in which case it replaces it
        else {
                Calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
        }
}

//Adds a decimal point to the display only if one isn't already present and an operator wasn't pressed last
function inputDecimal(dot) {
        if (Calculator.waitSecondOperand === true) return;
        if (!Calculator.displayValue.includes(dot)) {
                Calculator.displayValue += dot;
        }
}

//Runs after an operator button is pressed, and tells the program to wait for another digit
function handleOperator(nextOperator) {

        //Pulls the properties from Calculator and declares them for use in this function
        const {firstOperand, displayValue, operator} = Calculator;

        //Converts the current display value back into a number to use it in math
        const valueOfInput = parseFloat(displayValue);

        //Checks if an operator was pressed last and then rewrites the current operator if so
        if (operator && Calculator.waitSecondOperand) {
                Calculator.operator = nextOperator;
                return;
        }

        //If the first operator hasn't been defined, it does so here
        if (firstOperand == null) {
                Calculator.firstOperand = valueOfInput;
        }

        //Runs the calculation function and assigns the result to the display, and as the next firstOperand
        else if (operator) {

                //Not positive on this, but it seems to output whatever the variable firstOperand is as long as it isn't considered false
                const valueNow = firstOperand || 0;

                //Enters the required math data into the performCalculation constant and stores what it returns as result
                let result = performCalculation[operator](valueNow,valueOfInput);

                //Converts the answer into a 9 digit string
                result = Number(result).toFixed(9);
                result = (result * 1).toString();

                //Sets the answer as the display Value AND the next operand
                Calculator.displayValue = parseFloat(result);
                Calculator.firstOperand = parseFloat(result);

        }

        //Tells the program that an operator has been pressed already
        Calculator.waitSecondOperand = true;
        Calculator.operator = nextOperator;
}

//A constant that stores 4 functions as dictionary items, letting their symbol serve as their index
//The functions themselves just perform one of the 4 basic math operations
const performCalculation = {
        "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
        "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
        "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
        "-": (firstOperand, secondOperand) => firstOperand - secondOperand
}

//Resets the property values of the Calculator constant
function calculatorReset() {
        Calculator.displayValue = "0";
        Calculator.firstOperand = null;
        Calculator.waitSecondOperand = false;
        Calculator.operator = null;
}

//Displays the displayValue property
function updateDisplay() {
        const display = document.querySelector(".calculator-screen");
        display.value = Calculator.displayValue;
}

updateDisplay();

//Stores the buttons in the .calculator-keys block as an array
const keys = document.querySelector(".calculator-keys");

//Waits for the user to click inside the calculator and then calls the appropriate function
keys.addEventListener("click", (event) => {
        const {target} = event;

        //Tells it to ignore it if they didn't click a button
        if (!target.matches("button")) {
                return;
        }

        ///These are all the non-number buttons that have their own function managing them
        if (target.classList.contains("operator")) {
                handleOperator(target.value);
                updateDisplay();
                return;
        }

        if (target.classList.contains("decimal")) {
                inputDecimal(target.value);
                updateDisplay();
                return;
        }

        if (target.classList.contains("all-clear")) {
                calculatorReset();
                updateDisplay();
                return;
        }
        ///

        //Given that all of the above if statements have returns in them, these line are effectively inside an else block
        //If it isn't one of the above operators, then it must be a number, so it calls the inputDigit function
        inputDigit(target.value);
        updateDisplay();
})