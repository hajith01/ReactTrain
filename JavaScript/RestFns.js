//The rest operator collects multiple elements into one array.
//It is used in function parameters or destructuring.
function sumAll(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(5, 10));      // 15
