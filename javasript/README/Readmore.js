///................................. What is javaScript ....................................////

// JavaScript is a popular web scripting language and is used for client-side and server-side development
// The JavaScript code can be inserted into HTMl pages that can be understood and executed by web browsers
// whil also supporting object-oriented programming abilities

/////....................................DATA TYPE......................................./////

// JavaScript has 13 Datatypes

PrimitiveTypes; //{Immutable} means the data cannot be changed once created

String, Number, Boolean, Null, Undefined, Symbol, BigInt.Non - primitiveTypes; // {mutable}  :data can be changed

Object, Array, Function, Date, RegExp;

// Primitive types are {"immutable"}, meaning their values cannot be changed, while non-primitive types are {mutable.}

// ................. Primitive Data Types.....................

String; //For characters and alphanumeric values
Number; //For integer and floating-point numbers
Boolean; //For true and false values
Null; //For empty or unknown values
Undefined; //For variables that are only declared and not defined or initialized
Symbol; //For unique identifiers for objects
Bigint; //(ES2020): Used for representing integers larger than the Number type can handle

// ...........// Non-Primitive (Reference) Data Types: // ...........................//

Object; // For collections or complex values
Array; //A type of object used to store multiple values in a single variable, organized as a list.
Function; ///A type of object used to define {reusable blocks of code.}
Date; //Represents dates and times.
RegExp; //Represents regular expressions for {pattern matching}.

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// bigint
let bigNumber = BigInt(1234567890123456789012345678901234567890n);

//.....................................................................................//

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

//  function:
function greet() {
  // normal function
  console.log("Hello");
}
const function2 = () => {
  //  Arrow funtion
  console.log("Hello");
};

//  Date :
let today = new Date();

//  RegExp
let pattern = /abc/;

/// .............................ARRAY METHOD.........................................///

// Basic Array Methods
Array.length; //Returns the number of elements in the array.
Array.toString(); //Converts the array into a string, with each element separated by a comma.
Array.at(); //Returns the element at the specified index (supports negative indexing).
Array.join(); //Combines all elements into a string, with an optional separator.
Array.pop(); //Removes and returns the last element of the array.
Array.push(); //Adds one or more elements to the end of the array and returns the new length.

// Iteration Methods:

Array.shift(); //Removes and returns the first element of the array.
Array.unshift(); //Adds one or more elements to the beginning of the array and returns the new length.
Array.delete(); //Deletes the element at the specified index, leaving an empty spot (not commonly used, use splice() instead).
Array.concat(); //Merges two or more arrays and returns a new array.
Array.copyWithin(); //Copies part of the array to another location in the same array without changing its length.
Array.flat(); //Flattens nested arrays into a single-level array.
Array.splice(); //Adds, removes, or replaces elements in the array at a specific index.
Array.slice(); //Returns a shallow copy of a portion of the array, without modifying the original array.
Array.toSpliced(); //Similar to splice(), but it returns a new array with the changes instead of modifying the original.

//  .........................................OBJECT METHODS..................................................//

// Copies properties from a source object to a target object
Object.assign(target, source);

// Creates an object from an existing object
Object.create(object);

// Returns an array of the key/value pairs of an object
Object.entries(object);

// Creates an object from a list of keys/values
Object.fromEntries();

// Returns an array of the keys of an object
Object.keys(object);

// Returns an array of the property values of an object
Object.values(object);

// Groups object elements according to a function
Object.groupBy(object, callback);

//.............................................WHat is Function.............................................................//

("a set of statements that performs a task or calculates a value");

// What is Callback in JavaScript?
("In JavaScript, functions are objects and therefore, functions can take other functions as arguments and can also be returned by other functions");
("A callback  is a function that is passeed as a arguments ");
("A callback is a JavaScript function that is passed to another function as an argument or a parameter");
//What is higher order function
("A higher order function  *take*  a function  as a parameter");

// What is the difference between Function declaration and Function expression?

//declaration

Example: function abc() {
  return 5;
}
//expression

Example: var a = function abc() {
  return 5;
};
// .................................. what is closure ..............................................................//

// A closure in JavaScript happens when a function remembers and can use variables from its outer function, even after the outer function has finished running.
function outer() {
  let name = "Alice";

  function inner() {
    console.log(name); // inner can access 'name' from outer
  }

  return inner;
}

const closure = outer(); // outer finishes but returns inner
closure(); // inner still remembers 'name'
