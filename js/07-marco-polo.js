/*eslint-env browser */

// Global Variables
var i;

//Displaying results by checking if the number is divisible by 3 and 5
for (i = 1; i <= 100; i += 1) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        window.document.write("Marco! Polo! <br>");
        
    } else if (i % 5 === 0) {
        window.document.write("Polo! <br>");
        
    } else if (i % 3 === 0) {
        window.document.write("Marco! <br>");
        
    } else {
        window.document.write(i + "<br>");
        
    }
    
}