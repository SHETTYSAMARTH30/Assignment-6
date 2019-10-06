/*eslint-env browser */
// Variable declaration
var coinFlip;

do {
    coinFlip = Math.round(Math.random());   // Will get either 0 or 1
    if (coinFlip) {
        window.console.log("Tails");        // Print Tails if 1
    } else {
        window.console.log("Heads");        // Print Heads if 0
    
    }
    
} while (!coinFlip);