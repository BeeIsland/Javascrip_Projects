
let activePlayer = "X";
let selectedSquares = [];

//This is the function the entire game lives in
function placeXO(squareNum) {


        //Checks if the square is already filled before filling it
        if (!selectedSquares.some(element => element.includes(squareNum))) {
                let select = document.getElementById(squareNum);

                //Uses a different image depending on the active player
                if (activePlayer === "X") {
                        select.style.backgroundImage = "url('Images/x.png')";
                }
                else {
                        select.style.backgroundImage = "url('Images/o.png')";
                }

                //Keeps track of who placed their squares where
                selectedSquares.push(squareNum + activePlayer);
                //Checks if someone won or tied yet to end the game
                checkWinCondition();


                //Switches active player
                if (activePlayer === "X") {
                        activePlayer = "O";
                } else {
                        activePlayer = "X";
                }

                //Plays audio when placing a square
                audio('./Media/place.mp3');

                //Lets the computer be O's, and gives it time to make its move
                if (activePlayer === "O") {
                        disableClick();
                        setTimeout(function () {computersTurn();}, 1000);
                }

                return true;
        }

        //The computer moves randomly to any available squares
        function computersTurn() {
                let success = false;
                let pickASquare;

                while (!success) {
                        pickASquare = String(Math.floor(Math.random() * 9));

                        if (placeXO(pickASquare)) {
                                placeXO(pickASquare);
                                success = true;
                        }
                }
        }

        //Checks for all 16 win conditions manually and end the game if one is found.
        //Should all 9 squares be placed before someone wins, it declares a tie
        function checkWinCondition() {
                //Checks for 3 in a row
                if (arrayIncludes("0X", "1X", "2X")) {drawWinLine(50,100,558,100)}
                else if (arrayIncludes("3X", "4X", "5X")) {drawWinLine(50,304,558,304)}
                else if (arrayIncludes("6X", "7X", "8X")) {drawWinLine(50,508,558,508)}
                else if (arrayIncludes("0X", "3X", "6X")) {drawWinLine(100,50,100,558)}
                else if (arrayIncludes("1X", "4X", "7X")) {drawWinLine(304,50,304,558)}
                else if (arrayIncludes("2X", "5X", "8X")) {drawWinLine(508,50,508,558)}
                else if (arrayIncludes("6X", "4X", "2X")) {drawWinLine(100,508,510,90)}
                else if (arrayIncludes("0X", "4X", "8X")) {drawWinLine(100,100,520,520)}
                else if (arrayIncludes("0O", "1O", "2O")) {drawWinLine(50,100,558,100)}
                else if (arrayIncludes("3O", "4O", "5O")) {drawWinLine(50,304,558,304)}
                else if (arrayIncludes("6O", "7O", "8O")) {drawWinLine(50,508,558,508)}
                else if (arrayIncludes("0O", "3O", "6O")) {drawWinLine(100,50,100,558)}
                else if (arrayIncludes("1O", "4O", "7O")) {drawWinLine(304,50,304,558)}
                else if (arrayIncludes("2O", "5O", "8O")) {drawWinLine(508,50,508,558)}
                else if (arrayIncludes("6O", "4O", "2O")) {drawWinLine(100,508,510,90)}
                else if (arrayIncludes("0O", "4O", "8O")) {drawWinLine(100,100,520,520)}

                //Checks for tie
                else if (selectedSquares.length >= 9) {
                        audio("./Media/tie.mp3");
                        setTimeout(function() {resetGame();},1000);
                }

                //Makes checking who won more efficient
                function arrayIncludes(squareA, squareB, squareC) {
                        const a = selectedSquares.includes(squareA);
                        const b = selectedSquares.includes(squareB);
                        const c = selectedSquares.includes(squareC);

                        if (a === true && b === true && c === true) {return true}
                }
        }

        //Prevents the player from doing anything while the computer is playing
        function disableClick() {
                document.getElementById("body").style.pointerEvents = "none";
                setTimeout(function() {body.style.pointerEvents = "auto";}, 1000);
        }

        //Plays the sound clips when prompted
        function audio(audioURL) {
                let audio = new Audio(audioURL);

                audio.play();
        }

        //Draws a line based on which 3 squares the player won with
        //in the event of winning with 2 sets of 3 squares, it draws whichever it sees first
        function drawWinLine(X1, Y1, X2, Y2) {
                const canvas = document.getElementById("win-lines");
                const c = canvas.getContext("2d");

                let x = X1, y = Y1;

                //Animates the line
                function animateLineDrawing() {
                        const animationLoop = requestAnimationFrame(animateLineDrawing);
                        c.clearRect(0,0,608,608);
                        c.beginPath();
                        c.moveTo(X1,Y1);
                        c.lineTo(x,y);
                        c.lineWidth = 10;
                        c.strokeStyle = "red";
                        c.stroke();

                        if (X1 <= X2 && Y1 <= Y2) {
                                if (x < X2) {x+=10;}
                                if (y < Y2) {y+=10;}
                                if (x >= X2 && y >= Y2) {cancelAnimationFrame(animationLoop);}
                        }

                        if (X1 <= X2 && Y1 >= Y2) {
                                if (x < X2) {x+=10;}
                                if (y > Y2) {y-=10;}
                                if (x >= X2 && y <= Y2) {cancelAnimationFrame(animationLoop);}
                        }
                }    
                
                //Clears the line
                function clear() {
                        const animationLoop = requestAnimationFrame(clear);
                        c.clearRect(0,0,608,608);
                        cancelAnimationFrame(animationLoop);
                }

                //These functions together end the game
                disableClick();
                audio("./Media/winGame.mp3");
                animateLineDrawing();
                setTimeout(function() {clear(); resetGame();}, 1000);
        }

        //Resets the game to the beginning while also coincidentally letting whoever lost last round go first
        function resetGame() {
                
                for (let i = 0; i < 9; i++) {
                        let square = document.getElementById(String(i));
                        square.style.backgroundImage = ""
                }

                selectedSquares = [];
        }
}