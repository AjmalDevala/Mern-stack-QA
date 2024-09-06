
 /////....................................DATA TYPE......................................./////
// JavaScript has 8 Datatypes

String;
Number;
Bigint;
Boolean;
Undefined;
Null;
Symbol;
Object;

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

/// .............................ARRAY METHOD.........................................///

// Basic Array Methods
Array.length  //Returns the number of elements in the array.
Array.toString() //Converts the array into a string, with each element separated by a comma.
Array.at() //Returns the element at the specified index (supports negative indexing).
Array.join() //Combines all elements into a string, with an optional separator.
Array.pop() //Removes and returns the last element of the array.
Array.push() //Adds one or more elements to the end of the array and returns the new length.

// Iteration Methods:

Array.shift() //Removes and returns the first element of the array.
Array.unshift() //Adds one or more elements to the beginning of the array and returns the new length.
Array.delete() //Deletes the element at the specified index, leaving an empty spot (not commonly used, use splice() instead).
Array.concat() //Merges two or more arrays and returns a new array.
Array.copyWithin() //Copies part of the array to another location in the same array without changing its length.
Array.flat() //Flattens nested arrays into a single-level array.
Array.splice() //Adds, removes, or replaces elements in the array at a specific index.
Array.slice() //Returns a shallow copy of a portion of the array, without modifying the original array.
Array.toSpliced() //Similar to splice(), but it returns a new array with the changes instead of modifying the original.


//  .........................................OBJECT METHODS..................................................//

// Copies properties from a source object to a target object
Object.assign(target, source)

// Creates an object from an existing object
Object.create(object)

// Returns an array of the key/value pairs of an object
Object.entries(object)

// Creates an object from a list of keys/values
Object.fromEntries()

// Returns an array of the keys of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Groups object elements according to a function
Object.groupBy(object, callback)