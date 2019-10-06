/*eslint-env browser */

//Global variables
var num, i;
var flag;
flag = 0;

do {
    
    num = parseInt(window.prompt("Enter the number"), 10);   // User enter's an input
    if (isNaN(num)) {                                        // Checks whether the input is a number or not
        flag = 1;
        window.alert("Invalid input : Try Again");
    
    } else if (num == "") {
        flag = 1;
        window.alert("Invalid input : Try Again");
    
    } else {
        flag = 0;
    
    }
} while (flag);

// Prints all the number from num to zero
for (i = num; i >= 0; i -= 1) {
        
    window.document.write(i + "<br>");

}