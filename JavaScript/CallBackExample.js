//A callback function is a function that is passed as an argument to another function and executed later.
function calc(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

console.log(calc(5, 3, add));    
console.log(calc(5, 3, mul));

//-------------------------------------------------

console.log("Start");

setTimeout(function () {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");

//Output
//Start
//End
//Inside setTimeout