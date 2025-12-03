function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be 18 or older");
    }
    return "Access granted";
}

try {
    console.log(checkAge(15));
} catch (err) {
    console.log( err.message);
}
finally{
    console.log("Finally u know about your access");
}