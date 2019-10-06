/*eslint-env browser */

var coinFlip;
var choice;
var result;
var select;
var b = true;

coinFlip = Math.floor(Math.random() * 100);
//window.document.write(coinFlip);

while (b) {
    select = window.prompt("Select HEADS or TAILS ");
    if (select.toUpperCase() == "HEADS") {
        choice = 1;             // Heads Selected by the user
        break;
        
    } else if (select.toUpperCase() == "TAILS") {
        choice = 0;             // Tails Selected by the user
        break;
        
    } else {
        window.alert(" Invalid Input: Please try again ");
    }
    
}

if (coinFlip < 50) {
    result = 0;                 //Coin flipped to Tails
    
} else if (coinFlip >= 50) {
    result = 1;                //Coin flipped to Heads
}

//window.document.write(result);
if (result && choice) {
    window.document.write("The flip was heads and you chose heads... you win!");
    
} else if (result && !choice) {
    window.document.write("The flip was heads but you chose tails...you lose!");
    
} else if (!result && choice) {
    window.document.write("The flip was tails but you chose heads...you lose!");
    
} else if (!result && !choice) {
    window.document.write("The flip was tails and you chose tails...you win!");
    
}