const person = {
    name: "Ravi",
    age: 22,
    country: "India"
};

console.log(person.name);    // Ravi
console.log(person["age"]);  // 22
//updating
person.age = 23;
//Adding new key
person.job = "Developer";