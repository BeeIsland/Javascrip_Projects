
function amIRight(guess) {
        const answer = guess.getAttribute("data-answer");
        if (answer == "true") {
                alert("You guessed right!");
        }
        else if (answer == "false") {
                alert("You guessed wrong :(");
        }
        else {
                alert("ERROR");
        }
}