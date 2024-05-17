//map

//The map enchantment gracefully dances through each element.
//A symphony of transformations creates a stunning new array.


const originalArray = [1, 2, 3, 4, 5];

const newArray = originalArray.map((value, index, array) => value * 2);

console.log(newArray);


//reduce the array

const numbers = [1, 2, 3, 4, 5];

const resultObject = numbers.reduce((accumulator, number) => {
  accumulator[number] = (accumulator[number] || 0) + 1;
  return accumulator;
}, {});

console.log(resultObject);


//filter the array

//const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number,index, array) => number % 2 === 0);
console.log(evenNumbers);

//const numbers = [1, 2, 3, 4, 5];
//const evenNumbers = numbers.filter((value, index, array) => value % 2 === 0);
console.log(evenNumbers);


//Chaining Methods:

const transformedArray = originalArray
  .map((value) => value * 2)      // Double each value
  .filter((value) => value > 5)   // Keep only values greater than 5
  .reduce((sum, value) => sum + value, 0);  // Add them up