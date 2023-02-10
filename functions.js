// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
console.log("====================")
function greetStranger() {
    var greet = "Hello, nice to see you.";
    return greet;
}
var greetingExample = greetStranger();
console.log(greetStranger());
console.log("====================")

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function greetAcquaintance(name) {
    var greet = `Hello, nice to see you ${name}.`;
    return greet;
}
var greetingExample1 = greetAcquaintance("Taranveer");
var greetingExample2 = greetAcquaintance("Singh");
console.log(greetingExample1);
console.log(greetingExample2);
console.log("====================")

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(fName, mName, lName) {
    var fnGreeting = `${fName} ${mName} ${lName} has joined the meeting.`;
    return fnGreeting;
}
var greeting1 = greetPerson("Michael", "Gary", "Scott");
var greeting2 = greetPerson("Dwight", "Kurt", "Schrute")
console.log(greeting1);
console.log(greeting2);
console.log("====================")
// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number) {
    var fnSquare = number*number;
    return fnSquare;
} 
var root1 = 19;
var squareNumber1 = square(root1);
var outputLine1 = `The square of ${root1} is ${squareNumber1}`;
var root2 = 21;
var squareNumber2 = square(root2);
var outputLine2 = `The square of ${root2} is ${squareNumber2}`;
console.log(outputLine1);
console.log(outputLine2);
console.log("====================")

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(qty, item) {
    if (qty===0) {
        return fnOutput = `${item} - OUT of stock.`;
    } else if (qty <=3) {
        return fnOutput = `${item} - running LOW.`;
    } else {
        return fnOutput= `${item} is stocked.`;
    }
}
  
var checkCoffee = checkStock(4, "Coffee");
var checkTortillas = checkStock(3, "Tortillas");
var checkCheese = checkStock(0, "Cheese");
var checkSalsa = checkStock(1, "Salsa");
console.log(checkCoffee);
console.log(checkTortillas);
console.log(checkCheese);
console.log(checkSalsa);
console.log("====================")



// checkStock(4, "Coffee");
// // => "Coffee is stocked"

// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// // => "Salsa - running LOW"