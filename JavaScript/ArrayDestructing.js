const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

const student = { name: "Rahul", age: 20, grade: "A" };
const {nam,age}=student;
console.log(nam);
console.log(age);


//Nested Destructying
const info = { user: { location: { city: "Delhi" } } };

const {
    user: {
        location: { city }
    }
} = info;

console.log(city); // Delhi
