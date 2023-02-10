// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
console.log("Hello World".toLowerCase());

//The includes() method is called on string "Hello World"
//The argument is the string "Hello". The method will check whether "Hello World" contains the argument string.
//The return value is "true" 
console.log("Hello World".includes("Hello"));

//The endsWith() method is called on string "Hello World"
//The argument is the string "Hello". The method will check whether "Hello world" ends with "Hello"
//The return value is "false"
console.log("Hello World".endsWith("Hello"));

//The endsWith() method is called on string "Hello World"
//The argument is the string "rld". The method will check whether "Hello world" ends with "rld"
//The return value is "true"
console.log("Hello World".endsWith("rld"));



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
//var firstName = "Jeff";
//console.log(firstName.startsWith("J"));

// The slice() method is called on the firstName variable, which stores the string object "Taranveer". 
// The slice() method returns a substring of the original string object. There are 2 arguments passed in.
//First argument is the index of the starting character. Second argument is the index of the ending character - not included.
// In this example, the return value is "Taran", because index 0 (1st character) is "T" and it'd print string 
// upto (but not including) the index 5 (6th character) is "v".
// The console.log() statements prints the return value of the slice() method "Taran" to the console.
var firstName = "Taranveer";
var nickName = firstName.slice(0,5);
console.log(nickName);


// The includes() method is called on the firstName variable, which stores the string object "Billy". 
// The includes() method returns true if the data in the firstName variable includes the argument string "Bill" passed in.
// In this example, the return value is true, because "Billy" does include "Bill".
// The console.log() statements prints the return value of the includes() method (true) to the console.

var firstName = "Billy";
var nickName = "Bill";
var inclusion = firstName.includes(nickName);
console.log(inclusion);

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.



// The concat() method is called on the array1 variable.
// The concat() method concatenates the data in the array1 variable with the argument array2.
// In this example, the return value is a concatenated array of both array1 and array2.
// The console.log() statements prints the return value of the array3.
var array1 = [1,2,3];
var array2 = [5,6,7];
var array3 = array1.concat(array2);
console.log(array3);

//The join() method is called on the array4 variable to join all elements of the array into one string. 
//It includes an argument (",") which acts as the joiner string between the elements of the array.
//The method then finally returns the combined string
//The console.log() statement prints the final variable that stores the joined string.
var array4 = ["cat, mouse, dog"];
var joinedText = array4.join(",");
console.log(joinedText);

