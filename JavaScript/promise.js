let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received!");
    }, 2000);
});

promise.then(result => {
    console.log(result);
});


//console.log(promise);-- to see status of the promise
