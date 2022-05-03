let active = true;
function waitASec() {
        if (active)  {  
                active = false;   
                let iterationLen = document.getElementById("givenAmount").value;
                let sleepLen = document.getElementById("givenTime").value;
                let i = 0;
                let exitStrat = false;

                function sleep() {
                        const myTimeout = setTimeout(writeNum, sleepLen*1000);

                }

                function writeNum() {
                        if (!exitStrat) {
                                if (i < iterationLen) {
                                        i++;
                                        sleep();
                                }       
                                if (i == iterationLen) {

                                        document.getElementById("written").innerHTML = "Done";
                                        exitStrat = true;
                                }
                        }
                }

                writeNum();
        }
}

function clearing() {
        document.getElementById("written").innerHTML = "";
        document.getElementById("givenAmount").value = "";
        document.getElementById("givenTime").value = "";
        active = true;
}