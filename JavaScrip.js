var lowCounter = 0;
var midCounter = 0;
var highCounter = 0;
function getLow() {
    "use strict";
    return lowCounter;
}
function decreaseLow() {  
    if (lowCounter != 0) {
            document.getElementById("low").innerHTML = --lowCounter;
        }
}
function increaseLow(){
    document.getElementById("low").innerHTML = ++lowCounter;
}
function decreaseHigh() {  
    if(highCounter != 0)
        {
            document.getElementById("high").innerHTML = --highCounter;
        }
}
function increaseHigh(){
    document.getElementById("high").innerHTML = ++highCounter;
}
