

var counter = 0;
function createP() {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = counter.toString();
        document.getElementById("textBucket").appendChild(paragraph);
        counter += 1;
}