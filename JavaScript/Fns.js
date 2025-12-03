// Normal function
function squareNumbers(arr) {
    let result = [];
    for (let num of arr) {
        result.push(num * num);
    }
    return result;
}

console.log(squareNumbers([1, 2, 3]));

// Arrow function version
const squareNumbersArrow = arr => arr.map(n => n * n);

console.log(squareNumbersArrow([1, 2, 3]));

//For exceptional handling
// if (!Array.isArray(arr)) {
//       return "Error: Please provide an array";
//    }