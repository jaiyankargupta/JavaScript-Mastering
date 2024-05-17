//spreading array

const kingdoms = ["Chola", "Pandya", "Chera"];
const newKingdoms = [...kingdoms, "Pallava", "Hoysala"]; // 🌐 Spread the power!

console.log(newKingdoms);
// Output: ["Chola", "Pandya", "Chera", "Pallava", "Hoysala"]

//spreading object

const heroes = {
  protagonist: "Arulmozhivarman",
  companion: "Vallavarayan Vandhiyathevan",
};
const newHeroes = { ...heroes, ally: "Adhithya Karikalan" }; // 🚀 Spread the character dynamics!

console.log(newHeroes);
// Output: { protagonist: "Arulmozhivarman", companion: "Vallavarayan Vandhiyathevan", ally: "Adhithya Karikalan" }

//Consolidating Arrays

const characters = [
  "Arulmozhivarman",
  "Vallavarayan Vandhiyathevan",
  "Adhithya Karikalan",
  "Kundhavai",
  "Parthibendran Pallavan",
  "Poonguzhali",
];
const [hero, companion, ...supportingCharacters] = characters; // 🏰 Consolidate the forces!

console.log(hero); // Output: Arulmozhivarman
console.log(companion); // Output: Vallavarayan Vandhiyathevan
console.log(supportingCharacters); // Output: ["Adhithya Karikalan", "Kundhavai", "Parthibendran Pallavan", "Poonguzhali"]

//Consolidating Objects

// //const kingdoms = {
//     ruler: "Chola",
//     rival: "Pandya",
//     friend: "Pallava",
//     strategist: "Vallavarayan Vandhiyathevan",
// //  };
//   const { ruler, rival, ...allies } = kingdoms; // 👑 Consolidate the kingdom hierarchy!

//   console.log(ruler); // Output: Chola
//   console.log(rival); // Output: Pandya
//   console.log(allies);
//   // Output: { friend: "Pallava", strategist: "Vallavarayan Vandhiyathevan" }

//spread function

function assembleTeam(leader, companion, ...teamMembers) {
  console.log(`Leader: ${leader}`);
  console.log(`Companion: ${companion}`);
  console.log(`Team Members: ${teamMembers.join(", ")}`);
}

const warriors = [
  "Arulmozhivarman",
  "Vallavarayan Vandhiyathevan",
  "Adhithya Karikalan",
  "Parthibendran Pallavan",
];
assembleTeam("Sundara Chola", "Vanavan Mahadevi", ...warriors); // 🌐 Spread the teamwork spirit!

function createKingdom(leader, ally, rival, ...restOfKingdom) {
  console.log(`Leader: ${leader}`);
  console.log(`Rival: ${rival}`);
  console.log(`Rest of the Kingdom: ${restOfKingdom.join(", ")}`);
}

const lands = ["Chera", "Pallava", "Hoysala"];
createKingdom("Raja Raja Chola", "Pandya Brothers", ...lands); // 🏰 Establish the kingdom initiative!
