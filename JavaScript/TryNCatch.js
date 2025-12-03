try {

    let result = 10 / 0; // this does NOT throw error in JS
    console.log(result);
    
    // runtime error
    console.log(x); // x is not defined
} catch (error) {
    console.log("An error occurred:", error.message);
}


try {
    console.log("Code");
    throw new Error("Something went wrong!");
} catch (err) {
    console.log("Caught error:", err.message);
} finally {
    console.log("Finally");
}
