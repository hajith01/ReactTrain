const numbers = [10, 20, 30, 40];

console.log(numbers[0]); // 10
console.log(numbers[2]); // 30
numbers[1] = 25;
console.log(numbers);
numbers.push(50);   // add to end
numbers.unshift(5); // add to start

//Map(used in array not in string)
const doubled = [1, 2, 3].map(n => n * 2);
console.log(doubled); // [2, 4, 6]

//Filter(to use simple fns)
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

//reduce(to combine whole array to single value)
const sum = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);
console.log(sum); // 10


