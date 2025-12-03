const colors = ["red", "green", "blue", "yellow"];

const [first, second, ...restColors] = colors;

console.log(first);       // red
console.log(second);      // green
console.log(restColors);  // ['blue', 'yellow']


//Object Destruct
const person = { name: "John", age: 30, city: "Mumbai" };

const { name, ...restInfo } = person;

console.log(name);     // John
console.log(restInfo); // { age: 30, city: 'Mumbai' }
