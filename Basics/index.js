// variable:

var num = 10;



//Variable Scope


var num = 10; // global variable

function myFunction() {
  var num = 20; // local variable
  console.log(num); // 20
}

myFunction();

if (num == 10) {
  let temp = num * 2; // block-level variable
  console.log(temp); // 20
}


//Variable Naming Convention


//Camel Case:

var firstName = "Pugazharasan";
var lastName = "Chandrasekar";


//Pascal Case:
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }


//snake case:
  var first_name = "Pugazharasan";
  var last_name = "Chandrasekar";

//constant case:
  const PI = 3.14;



//Keywords in JavaScript

// var, let, const, function, if, else, for, while, break,
// continue, switch, case, default, do, return, try, catch, throw,
// typeof, instanceof, new, delete, in, this, super, class,
// extends, export, import, async, await, yield, debugger, null,
// undefined, true, false, NaN, Infinity


//Hoisting: Hoisting moves variable and function declarations to the top of their scope before code execution.

console.log(x); // undefined
var x = 10;
console.log(x); // 10

// What happens with let?
console.log(y); // ReferenceError: y is not defined
let y = 20;
console.log(y); // 20


//Data Types

//number

var num = 10;
var num1 = -10.5;
var num2 = 10.5e5; // 1050000
var num3 = 10.5E-5; // 0.000105
console.log(typeof num); // number

//string

var str = 'Hello World';
console.log(typeof str); // string


//object


var obj = {
    name: 'Pugazharasan C',
    age: 25,
    city: 'Trichy'
  };
  console.log(typeof obj); // object
  console.log(obj.name); // Pugazharasan C
  console.log(obj["age"]); // 25


//array

  var arr = [1, 2, 3, 4];
  console.log(typeof arr); // object
  console.log(arr[0]); // 1
  console.log(arr[3]); // 4
  console.log(arr.length); // 4


  //null

  var obj = null;
console.log(typeof obj); // object



//boolean

var bool = true;
console.log(bool); // true
console.log(typeof bool); // boolean


//undefined

var name;
console.log(name); // undefined
console.log(typeof undefined); // undefined


//symbol

const symbol = Symbol('symbol');
console.log(typeof symbol); // symbol
console.log(symbol); // Symbol(symbol)


//bigInt

const bigInt = BigInt(100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
console.log(typeof bigInt); // bigint




//Coding Procedure

// 1. Check User Input:

// Print user input to the console.
// Understand the input provided by the user for a clear construction plan.

// 2. Format Input:

// Transform input into a consistent format, aligning with the requirements of your program.
// Ensure the input aligns with the
// construction specifications.

// 3. Implement Logic:
// Develop the main logic, breaking down the problem into manageable steps.
// Ensure the logic aligns with the overall goal of your construction project.


//please visit : https://github.com/PugazharasanC/JS-Notes/blob/main/CODEKATA_JS.md


//Typecasting 

var num = parseInt("1234");

var num = parseFloat("1234.5");

var num = Number("1234.5");

var num = +"1234"; //num = num + "1234"

let num1 = Number("12js4.5"); // NaN
let num2 = parseInt("12js4.5"); // 12


//Array of Strings to Array of Numbers

var arr = ["10", "20", "30"];
var numArr = arr.map(Number)
console.log(numArr); // [10, 20, 30]


//For an in-depth understanding of the Map function: https://github.com/PugazharasanC/JS-Notes/blob/main/MRF.md 


// Number to String

var num = 1234;
var str = num.toString();
console.log(str); // "1234"


var num = 1234;
var str = String(num);
console.log(str); // "1234"


var num = 1234;
var str = ""+num;
console.log(str); // "1234"


//JavaScript Operators


//Arithmetic Operators

var num = 10;
var num2 = 20;
var sum = num + num2;
console.log(sum); // 30

var num = 10;
var num2 = 20;
var diff = num - num2;
console.log(diff); // -10

var num = 10;
var num2 = 20;
var prod = num * num2;
console.log(prod); // 200

var num = 10;
var num2 = 20;
var quot = num / num2;
console.log(quot); // 0.5

var num = 10;
var num2 = 20;
var mod = num % num2;
console.log(mod); // 10



//Relational Operators

console.log(10 < 20) // true
console.log(10 < 10) // false
console.log(10 < 0) // false

console.log(10 < 20) // true
console.log(10 < 10) // false
console.log(10 < 0) // false

console.log(10 < 20) // true
console.log(10 < 10) // false
console.log(10 < 0) // false


console.log(10 >= 20) // false
console.log(10 >= 10) // true
console.log(10 >= 0) // true


console.log(10 == 20) // false
console.log(10 == 10) // true
console.log(10 == 0) // false


console.log(10 != 20) // true
console.log(10 != 10) // false
console.log(10 != 0) // true


console.log(10 !== 20) // true
console.log(10 !== 10) // false
console.log(10 !== 0) // true


//Logical Operators

console.log(true && false) // false

console.log(true || false) // true

console.log(!true) // false



//Assignment Operators:


var num = 10;

var num = 10;
num += 20; // num = num + 20;
console.log(num); // 30

var num = 10;
num -= 20; // num = num - 20;
console.log(num); // -10

var num = 10;
num *= 20; // num = num * 20;
console.log(num); // 200


//Conditional Operator


var num = 10;
var num2 = 20;
var result = (num > num2)? "num is greater than num2" : "num is less than num2";
console.log(result); // num is greater than num2



//Bitwise Operators

var num1 = 10;              // 1010
var num2 = 15;              // 1111
var result = num1 & num2;   //----- &
console.log(result); // 10  // 1010

var num1 = 10;              // 1010
var num2 = 15;              // 1111
var result = num1 | num2;   //----- |
console.log(result); // 15  // 1111

var num1 = 10;               // 00001010
var result = ~num1;          //--------- ~
console.log(result); // -11  // 11110101

var num1 = 10;              // 00001010
var num2 = 15;              // 00001111
var result = num1 ^ num2;   //--------- ^
console.log(result); // 15  // 00000101


var num1 = 10;              // 00001010
var num2 = 2;
var result = num1 << num2;
console.log(result); // 40  // 00101000

var num1 = 10;              // 00001010
var num2 = 2;
var result = num1 >> num2;
console.log(result); // 2  // 00000010



//Conditional Statements

if (condition) {
    // Code block to be executed if the condition is true
  }


  let num1 = 10;
  let num2 = 20;
  
  let diff = num1 - num2;
  
  if (diff < 0) {
    // This block will only be executed if the diff is negative
    diff = -diff; // Equivalent to diff = diff * -1;
  }
  
  console.log("The difference is: " + diff); // The difference is: 10 





  if (condition) {
    // Code block to be executed if the condition is true
  } else {
    // Code block to be executed if the condition is false
    // This block is optional
  }


let num1 = 10;

if (num1 < 0) {
  console.log("num1 is negative");
} else {
  console.log("num1 is positive");
}


if (condition1) {
    // Code block to be executed if condition1 is true
  } else if (condition2) {
    // Code block to be executed if condition1 is false and condition2 is true
  } else {
    // Code block to be executed when none of the conditions is true
  }

  let num1 = 10;

  if (num1 < 0) {
    console.log("num1 is negative");
  } else if (num1 === 0) {
    console.log("num1 is zero");
  } else {
    console.log("num1 is positive");
  }
  
  
  if (condition1) {
    // Code block to be executed if condition1 is true
    if (condition2) {
      // Code block to be executed if
  
   //condition1 is true and condition2 is true
    } else {
      // Code block to be executed if condition1 is true and condition2 is false
    }
  } else {
    // Code block to be executed if condition1 is false
    if (condition3) {
      // Code block to be executed if condition1 is false and condition3 is true
    } else {
      // Code block to be executed if condition1 is false and condition3 is false
    }
  }


  let num1 = 10;

  if (num1 < 0) {
    console.log("num1 is negative");
    if (num1 === -10) {
      console.log("num1 is -10");
    } else {
      console.log("num1 is not -10");
    }
  } else {
    console.log("num1 is positive");
    if (num1 === 10) {
      console.log("num1 is 10");
    } else {
      console.log("num1 is not 10");
    }
  }



  // Looping Statements

  while (condition) {
    // Build the block
 }

let count = 0;
while(count<5){
   console.log("count",count);
   count++;
}

console.log("construction completed:");


for (initialization; condition; alteration) {
    // Construct the block
 }


 for (var i = 1; i <= 5; i++) {
    console.log(i); // 1, 2, 3, 4, 5
 }
 
 console.log("Construction Completed");


 do {
    // Build the block
 } while (condition);

 //let count = 0;

 do {
    console.log("Count: " + count);
    count++;
 } while (count < 5);
 
 console.log("Construction Concluded");



//Branching Statement

switch (expression) {
    case value1:
      // Execute code for value1
      break;
    case value2:
      // Execute code for value2
      break;
    default:
      // Execute code when no cases match
  }


  let day = "Monday";

  switch (day) {
    case "Monday":
      console.log("Today is Monday");
      break;
    case "Tuesday":
      console.log("Today is Tuesday");
      break;
    // ... cases for other days ...
    default:
      console.log("Invalid day");
  } 




// Break and Continue

let fruits = ["Banana", "Orange", "Apple", "Mango"];

for (var i = 0; i < fruits.length; i++) {
  if (fruits[i] == "Mango") {
    break; // Emergency stop when Mango is found
    console.log("Mango Found"); // This statement is not executed
  }
  console.log(fruits[i]); // Outputs Banana, Orange, Apple
}

console.log("Loop Finished"); // Executes after the loop halts


//let fruits = ["Banana", "Orange", "Apple", "Mango"];

for (var i = 0; i < fruits.length; i++) {
  if (fruits[i] == "Apple") {
    continue; // Skip the rest of the code for Apple
  }
  console.log(fruits[i]); // Outputs Banana, Orange, Mango
}

console.log("Loop Finished"); // Executes after the loop ends


//for-in for object

for(variable in object){
    //code block
}

let person = {
    name: "Pugazharasan C",
    age: 25,
    city: "Chennai"
  };
  
  for (var property in person) {
    console.log(property, '=>', person[property]); // Outputs name => Pugazharasan C, age => 25, city => Chennai
  }


//for-of -> array,strings, map, sets

for(variable of iterable){
    //code block
}

//let fruits = ["Banana", "Orange", "Apple", "Mango"];

for (var fruit of fruits) {
  console.log(fruit); // Outputs Banana, Orange, Apple, Mango
}


//for-each -> array
array.forEach(function(currentValue, index, array) {
    // code block to be executed
  });
  
  // Example
  const array = [1, 2, 3, 4, 5];
  array.forEach(function(value) {
    console.log(value);
  });
  


//map -> array
  array.map(function(currentValue, index, array) {
    // code block to be executed
  });
  
  // Example
  //const array = [1, 2, 3, 4, 5];
  const newArray = array.map(function(value) {
    return value * 2;
  });
  console.log(newArray); // [2, 4, 6, 8, 10]
  


  