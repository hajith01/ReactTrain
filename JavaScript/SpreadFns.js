const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "Delhi", country: "India" };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);