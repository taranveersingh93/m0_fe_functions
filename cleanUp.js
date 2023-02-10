// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit

//===================
// EX 1: 
function askName() { 
  console.log("Hello, what is your name?");
 }

askName();
//Distributed the curly brackets over multiple lines. 
//Included semi colons.
//Shortened the function name. 
//====================
// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
return sum;
      }

var sum1 = addThreeNums(1, 2, 3);
var sum2 = addThreeNums(4, 2, 7);
console.log(sum1);
console.log(sum2);
//Stored the 2 function calls as values in variables. 
//Logged the 2 variables to the console. 
//===================

// // EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");   
 }

makeFreshPesto();
//Corrected the spelling from "func" to "function"
//Formatted curly brackets as commonly used.
//==================

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg;
}
var aver = average(2,4);
console.log(aver);

// Fixed indentation.
// Assigned a variable with the returned value.
// Logged the variable to a console. 