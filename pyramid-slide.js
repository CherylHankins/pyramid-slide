
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has chosen in the 'How high?' slider,
 * and then draws a pyramid with that height.
 */
function determineHeightAndThenDrawPyramid() {

    // just so we know we're here
    console.log("someone invoked the determineHeightAndThenDrawPyramid function!");

    // figure out the height the user choose
    var height = document.getElementById("height").value;

    // convert the string to an int
    height = parseInt(height);
    console.log(height);

    // draw the pyramid with the given height
    drawPyramid(height);
}

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a pyramid of the specified height
 */
 function drawPyramid(height) {

     // before drawing, clear the old content
     document.getElementById("pyramid").innerHTML = "";

     //retrieve brick symbol (#, @, X, $)
     var select = document.getElementById("symbol");
     var symbol = select.options[select.selectedIndex].value;
     console.log(symbol);
     // for each row....
     for (var row = 0; row < height; row++) {
         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }

         for (var i = 0; i < numBricks; i++) {
             rowStr += symbol;
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}


//Issue 1- How to get the range number to display
