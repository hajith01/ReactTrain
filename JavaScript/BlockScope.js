let num = 5;

if (true) {
    let num = 10; // this stays inside the block
    console.log("Inside:", num);
}

console.log("Outside:", num);
