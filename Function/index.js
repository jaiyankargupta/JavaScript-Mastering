function greet() {
    console.log("Sweet melodies of 'Hello,' dear reader!");
  }
  
  greet(); // Ah, the sweet serenade of a greeting!


//Named Functions

//Named Functions: Think of them as love notes with a name tag. Easy to remember, easy to reuse—expressing your sentiments with clarity.

function sayHello(name){
    console.log("Hello, " + name);
}

sayHello("Pugazharasan");





//Anonymous Functions

//Anonymous Functions: Imagine these as mysterious love notes passed in secret. They exist without a name, adding a touch of intrigue to your code.

var sayHello = function(name){
    console.log("Hello, " + name);
}

sayHello("Pugazharasan");


//Arrow Functions:

//Arrow Functions: Think of them as love notes written in shorthand. Concise, modern, and expressing your feelings with a touch of elegance.

//traditional way:

let addold = function(a,b){
    return a+b;
}

//new way:

let addNew = (a,b) =>{
    return a+b;
}


//Immediate invoked Functions:

(function () {
    let message = "A love at first sight, I am an IIFE!";
    console.log(`Whispers of love: ${message}`);
  })();


//IIFE (Immediately Invoked Function Expression): Picture this as a love declaration made in a split second. It's like saying "I love you" and giving a warm hug all at once. 


function multiply(a, b) {
    return a * b;
  }
  
  let result = multiply(5, 2);
  console.log(`The crescendo of love: ${result}`);


  //Handling Arguments
//Handling Arguments: This is like having a conversation in a language both you and your love understand. You can customize the way you express your feelings based on the context.
  function greetPerson(name, greeting = "Hello") {
    console.log(`Sweet words exchanged: ${greeting}, ${name}!`);
  }
  
  greetPerson("Harry Potter"); // A warm embrace: Hello, Harry Potter!
  greetPerson("Hermione Granger", "Hi"); // A playful exchange: Hi, Hermione Granger!


  
//infinity love: Rest Parameters
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(`A symphony of infinite love: ${sum(1, 2, 3, 4, 5)}`);