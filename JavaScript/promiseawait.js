async function fetchData() {
    let promise = new Promise(resolve => {
        setTimeout(() => resolve("Done!"), 2000);
    });

    let result = await promise; // waits here
    console.log(result);
}

fetchData();
