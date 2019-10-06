/*eslint-env browser */

//Global variables
var num1;
var num2;

var flag;
flag = 0;

// To check whether the number entered by user is valid or not
do {
    
    //Get 2 numbers from the user
    num1 = parseFloat(window.prompt("Enter the first number"));
    num2 = parseFloat(window.prompt("Enter the second number"));
    
    if (isNaN(num1) || isNaN(num2)) {
        flag = 1;
        window.alert("Invalid input : Try Again");
    
    } else if (num1 == "" || num2 == "") {
        flag = 1;
        window.alert("Invalid input : Try Again");
    
    } else {
        flag = 0;
    
    }
} while (flag);

if (num1 > num2) {
    window.document.write(num1 + " is the larger number.");
    
} else if (num2 > num1) {
    window.document.write(num2 + " is the larger number.");
    
} else if (num1 === num2) {
    window.document.write("Both the number's are equal.");
    
}