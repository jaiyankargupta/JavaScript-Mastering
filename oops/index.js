//OOP revolves around the concept of objects. An object is like a magical entity that encapsulates data and behaviors. These objects interact with each other, casting spells and collaborating to create a harmonious code symphony.

//Objects are the building blocks of OOP. They encapsulate data (attributes) and actions (methods), making them powerful entities in the code kingdom.

//Think of classes as blueprints or molds for creating objects. They define the structure and behavior that objects belonging to them will exhibit.

//Brace yourselves for the magic of the 'this' keyword! It's your trusty wand, allowing objects to refer to themselves and access their own properties and methods.

//Unveil the secrets of accessing and modifying object properties with getter and setter methods. These enchanting methods provide controlled access to the magical attributes within an object.

//The constructor is like the magical birthplace of objects. It's a special method within a class that is invoked when a new object is created. Here, you can set up the initial state and enchantments of the object.




//why oop matters:


//Organization: OOP provides a structured approach, making code more organized and manageable.
//Reusability: With classes and objects, you can reuse code, saving time and effort.
//Flexibility: OOP offers flexibility through concepts like inheritance and polymorphism, adapting to changing requirements.



//In JavaScript, every object is linked to a prototype object. A prototype is like a magical ancestor, passing down properties and methods to its descendants (objects). This linkage forms a chain known as the prototype chain.

//Each function in JavaScript has a special property called prototype. It's like a spellbook containing methods that objects created from the function will inherit.

//The __proto__ property is a direct connection to an object's prototype. It's like a magical mirror reflecting the prototype from which an object inherits.

//Prototypal inheritance is the magical process where an object inherits properties and methods from its prototype. It's the essence of the enchanting connection between objects and their prototypes.


// Creating a simple function (constructor)
function Wizard(name) {
    this.name = name;
  }
  
  // Adding a method to the prototype
  Wizard.prototype.castSpell = function () {
    console.log(`${this.name} casts a magical spell!`);
  };
  
  // Creating wizard objects
  const merlin = new Wizard("Merlin");
  const gandalf = new Wizard("Gandalf");
  
  // Wizards inheriting and using the prototype method
  merlin.castSpell(); // Output: Merlin casts a magical spell!
  gandalf.castSpell(); // Output: Gandalf casts a magical spell!



  